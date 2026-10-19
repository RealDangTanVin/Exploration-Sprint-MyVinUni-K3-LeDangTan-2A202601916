from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader
from pypdf import PdfReader
from PIL import Image

root=Path(__file__).resolve().parent
files=sorted((root/'images').glob('*.png'))
assert len(files)==10, f'Expected 10 images, found {len(files)}'
out=root/'slides.pdf'
w,h=960,540
c=canvas.Canvas(str(out),pagesize=(w,h),pageCompression=1)
c.setTitle('MyVinmec - Chu dong tung buoc di kham')
c.setAuthor('Le Dang Tan - K3 - 2A202601916')
c.setSubject('10 slide anh cho bai pitch 10 phut. Exploration Sprint 19/10/2026.')
for f in files:
    with Image.open(f) as im:
        iw,ih=im.size
        assert abs(iw/ih-16/9)<0.02, f'Invalid slide ratio: {f}: {im.size}'
    scale=min(w/iw,h/ih)
    dw,dh=iw*scale,ih*scale
    c.setFillColorRGB(247/255,250/255,248/255)
    c.rect(0,0,w,h,fill=1,stroke=0)
    c.drawImage(ImageReader(str(f)),(w-dw)/2,(h-dh)/2,width=dw,height=dh,mask='auto')
    c.showPage()
c.save()
r=PdfReader(str(out))
assert len(r.pages)==10
print(f'PDF: {len(r.pages)} pages, 16:9, {out.stat().st_size:,} bytes')
