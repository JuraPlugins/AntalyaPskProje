import zipfile
import xml.etree.ElementTree as ET

def read_docx(file_path):
    try:
        doc = zipfile.ZipFile(file_path)
        content = doc.read('word/document.xml')
        tree = ET.fromstring(content)
        
        namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        
        paragraphs = []
        for p in tree.findall('.//w:p', namespaces):
            texts = [node.text for node in p.findall('.//w:t', namespaces) if node.text]
            if texts:
                paragraphs.append(''.join(texts))
        return '\n'.join(paragraphs)
    except Exception as e:
        return str(e)

print(read_docx(r"c:\Users\PC\Downloads\PsikolojiSitesi\parafili.docx"))
