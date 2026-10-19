from pathlib import Path
import pypdfium2 as pdfium

root=Path(__file__).resolve().parent
dest=root.parent/'tmp'/'pdfs'/'pitch-review'
dest.mkdir(parents=True,exist_ok=True)
pdf=pdfium.PdfDocument(str(root/'slides.pdf'))
assert len(pdf)==10
for i in range(len(pdf)):
    page=pdf[i]
    assert abs(page.get_width()/page.get_height()-16/9)<0.001
    image=page.render(scale=1.25).to_pil()
    image.save(dest/f'{i+1:02d}.png')
print(f'Rendered {len(pdf)} pages to {dest}')
