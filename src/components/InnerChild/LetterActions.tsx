import { useCallback, RefObject } from "react";
import { motion } from "framer-motion";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface LetterActionsProps {
  letterRef: RefObject<HTMLDivElement>;
  texts: string[];
  onClose: () => void;
}

const LetterActions = ({ letterRef, texts, onClose }: LetterActionsProps) => {
  const captureLetterCanvas = useCallback(async () => {
    if (!letterRef.current) return null;
    return html2canvas(letterRef.current, {
      backgroundColor: "#FFF8F0",
      scale: 2,
      useCORS: true,
    });
  }, [letterRef]);

  const handleSavePDF = useCallback(async () => {
    const canvas = await captureLetterCanvas();
    if (!canvas) return;

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 10, pdfWidth, pdfHeight);

    // Footer
    pdf.setFontSize(8);
    pdf.setTextColor(124, 58, 237);
    const footer = "abeeralmatooq.com | هذه الرسالة كُتبت خلال رحلتك مع منهج المايسترا";
    pdf.text(footer, pdfWidth / 2, pdf.internal.pageSize.getHeight() - 10, { align: "center" });

    // Date
    const date = new Date().toLocaleDateString("ar-SA");
    pdf.text(date, pdfWidth / 2, pdf.internal.pageSize.getHeight() - 5, { align: "center" });

    pdf.save("رسالة-لطفلتي-الداخلية.pdf");
  }, [captureLetterCanvas]);

  const handleShareInstagram = useCallback(async () => {
    // Create a story-sized canvas
    const storyCanvas = document.createElement("canvas");
    storyCanvas.width = 1080;
    storyCanvas.height = 1920;
    const ctx = storyCanvas.getContext("2d");
    if (!ctx) return;

    // Purple gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, 1920);
    gradient.addColorStop(0, "hsl(263, 80%, 30%)");
    gradient.addColorStop(0.5, "hsl(263, 70%, 45%)");
    gradient.addColorStop(1, "hsl(270, 60%, 55%)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1080, 1920);

    // Letter area
    ctx.fillStyle = "rgba(255, 248, 240, 0.95)";
    const rx = 80, ry = 200, rw = 920, rh = 1400, rr = 30;
    ctx.beginPath();
    ctx.moveTo(rx + rr, ry);
    ctx.lineTo(rx + rw - rr, ry);
    ctx.quadraticCurveTo(rx + rw, ry, rx + rw, ry + rr);
    ctx.lineTo(rx + rw, ry + rh - rr);
    ctx.quadraticCurveTo(rx + rw, ry + rh, rx + rw - rr, ry + rh);
    ctx.lineTo(rx + rr, ry + rh);
    ctx.quadraticCurveTo(rx, ry + rh, rx, ry + rh - rr);
    ctx.lineTo(rx, ry + rr);
    ctx.quadraticCurveTo(rx, ry, rx + rr, ry);
    ctx.fill();

    // Text
    ctx.textAlign = "right";
    ctx.direction = "rtl";
    ctx.fillStyle = "hsl(263, 70%, 30%)";

    ctx.font = "italic bold 42px 'IBM Plex Sans Arabic', sans-serif";
    ctx.fillText("عزيزتي الصغيرة…", 920, 300);

    ctx.font = "32px 'IBM Plex Sans Arabic', sans-serif";
    let yPos = 380;
    texts.forEach((text) => {
      const words = text.split(" ");
      let line = "";
      for (const word of words) {
        const testLine = line ? line + " " + word : word;
        if (ctx.measureText(testLine).width > 780) {
          ctx.fillText(line, 920, yPos);
          yPos += 50;
          line = word;
        } else {
          line = testLine;
        }
      }
      if (line) {
        ctx.fillText(line, 920, yPos);
        yPos += 70;
      }
    });

    ctx.font = "italic bold 38px 'IBM Plex Sans Arabic', sans-serif";
    ctx.fillStyle = "hsl(263, 70%, 45%)";
    ctx.fillText("…بحب، النسخة الأقوى منك", 920, yPos + 30);

    // Branding
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.font = "28px 'IBM Plex Sans Arabic', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("منهج المايسترا", 540, 1800);
    ctx.font = "22px 'IBM Plex Sans Arabic', sans-serif";
    ctx.fillText("@abeeralmatooq", 540, 1850);

    // Download
    const link = document.createElement("a");
    link.download = "رسالتي-منهج-المايسترا.png";
    link.href = storyCanvas.toDataURL("image/png");
    link.click();
  }, [texts]);

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div className="mt-8 space-y-6" initial="initial" animate="animate">
      {/* Coach message */}
      <motion.div
        className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 text-center border border-border"
        {...fadeUp}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <p className="text-foreground text-sm md:text-base leading-relaxed">
          كثير من رحلات المايسترا تبدأ من هذه اللحظة تحديداً…
        </p>
      </motion.div>

      {/* Action buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-3 justify-center"
        {...fadeUp}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <button
          onClick={handleSavePDF}
          className="bg-card text-foreground font-semibold px-6 py-3 rounded-full border border-border hover:scale-105 transition-transform text-sm"
        >
          حفظي رسالتك كـ PDF
        </button>
        <button
          onClick={handleShareInstagram}
          className="bg-card text-foreground font-semibold px-6 py-3 rounded-full border border-border hover:scale-105 transition-transform text-sm"
        >
          شاركيها على انستغرام
        </button>
        <a
          href="https://api.leadconnectorhq.com/widget/bookings/carol-free-consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform glow-purple text-sm"
        >
          إحجزي إستشارتك المجانية الأن
        </a>
      </motion.div>
    </motion.div>
  );
};

export default LetterActions;
