https://angelina-pysanyuk.github.io/goit-markup-hw-08/

I have made an attempt to make semi-automatic translation for static files using Python Beautiful Soap library and some Pandas functions.
The idea was to get innerHTML text from HTMl file, transform it into Excel file using Pandas dataframe, then translate to language needed,
upload translation, make JSON file with original and translated text, and add Javascript file that will loop thru the JSON file, changing 
corresponding text. To tell JS where to insert translated text, new classes (translate) were added in corresponding places. Index.html was 
translated manually, using IDs, without using Python. 
Portfolio.html was translated using the above method, so you can compare code size and complexity :-).
Input.xlsx and output.xlsx - translation and origin text files, autoLangSelect.js and lang-select.js - two files to illustrate both 
translation methods, portfolio_orig.html - unmodifyed source html file for autotranslation. Original HTML files were modyfied by adding 
language selection buttons to nav. 
Please, comment!    
