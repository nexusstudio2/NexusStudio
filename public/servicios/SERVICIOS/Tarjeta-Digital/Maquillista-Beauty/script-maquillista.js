// Genera y descarga un archivo .vcf real con los datos de contacto
const downloadBtn = document.getElementById("rc-download-vcard");

if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "N:Cobos;Renata;;;",
      "FN:Renata Cobos",
      "TITLE:Maquillista de eventos",
      "TEL;TYPE=CELL:+526143771797",
      "EMAIL:contacto@renatacobos.mx",
      "ADR:;;Chihuahua;Chihuahua;;;México",
      "URL:https://wa.me/526143771797",
      "END:VCARD",
    ].join("\n");

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Renata-Cobos.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });
}