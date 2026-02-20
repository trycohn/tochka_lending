import os
import shutil

directory = 'public/images'

# Map of patterns to new names
renames = {
    'Величко Ирина Владимировна.pdf': 'doc_irina_main.pdf',
    'Величко_Ирина_Владимировна_Сем_конф.pdf': 'doc_irina_sem_konf.pdf',
    'Величко_Ирина_Владимировна_клин_псих.pdf': 'doc_irina_klin_psih.pdf',
    'Величко_Ирина_Владимировна_перинт_потери.pdf': 'doc_irina_perint.pdf',
    'Величко_Ирина_Владимировна_психиатрия.pdf': 'doc_irina_psihiatriya.pdf',
    'ЭОТ_Irina.pdf': 'doc_irina_eot.pdf',
    'Сертификат_о_прослушивании_вебинара_Игроки,_участвующие_в_психологических_page-0001_maria.jpg': 'cert_maria_igroki.jpg',
    'Сертификат_о_прослушивании_вебинара_Применение_в_психологическом_page-0001_maria.jpg': 'cert_maria_primenenie.jpg',
    'Сертификат_о_прослушивании_вебинара_Психологические_трансформационные_pages-to-jpg-0001_maria.jpg': 'cert_maria_transform.jpg',
    'Сертификат_о_прослушивании_вебинара_Юнгианский_анализ_сказок_page-0001_maria.jpg': 'cert_maria_skazki.jpg'
}

for filename in os.listdir(directory):
    # Try to match by checking if the filename contains parts of the expected name
    # This is a heuristic because of the encoding issues in the terminal view vs python
    new_name = None
    
    if 'Величко Ирина Владимировна' in filename and filename.endswith('.pdf') and '26' in filename:
         new_name = 'doc_irina_main.pdf'
    elif 'Сем_конф' in filename:
        new_name = 'doc_irina_sem_konf.pdf'
    elif 'клин_псих' in filename:
        new_name = 'doc_irina_klin_psih.pdf'
    elif 'перинт_потери' in filename:
        new_name = 'doc_irina_perint.pdf'
    elif 'психиатрия' in filename:
        new_name = 'doc_irina_psihiatriya.pdf'
    elif 'ЭОТ_Irina' in filename or 'Irina.pdf' in filename: # The short one
        new_name = 'doc_irina_eot.pdf'
    elif 'Игроки' in filename and 'maria' in filename:
        new_name = 'cert_maria_igroki.jpg'
    elif 'Применение' in filename and 'maria' in filename:
        new_name = 'cert_maria_primenenie.jpg'
    elif 'трансформационные' in filename and 'maria' in filename:
        new_name = 'cert_maria_transform.jpg'
    elif 'Юнгианский' in filename and 'maria' in filename:
        new_name = 'cert_maria_skazki.jpg'

    if new_name:
        old_path = os.path.join(directory, filename)
        new_path = os.path.join(directory, new_name)
        print(f"Renaming {filename} to {new_name}")
        os.rename(old_path, new_path)
