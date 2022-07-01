// Language JSON File Location

var language = localStorage.getItem('language');

// Default Language
var default_lang = 'vni';


// Set Selected Language
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    
    if(localStorage.getItem('language') === 'en'){
        document.getElementsByName('place')[0].placeholder='Find the desired product, category or brand...';
    }else {
        document.getElementsByName('place')[0].placeholder='Tìm sản phẩm, danh mục hay thương hiệu mong muốn ...';
    }


    language = localStorage.getItem('language');
    // Run Multi Language Plugin
    if (localStorage.getItem('bg-color') === 'blue-theme') {
        document.body.classList.remove("red-theme");
        document.body.classList.add('blue-theme');
    } else {
        document.body.classList.remove("blue-theme");
        document.body.classList.add('red-theme');
    }
    getLanguage()
}

// Run Multi Language Plugin
function getLanguage() {
    // Language on user preference
    (language == null) ? setLanguage(default_lang) : false;
    // Load data of selected language
    $.ajax({
        url: '' + language + '.json',
        dataType: 'json', async: true
    }).done(function (lang) {
        // add selected language class to the body tag
        $('body').add('class', language);
        // Loop through message in data
        $.each(lang, function (index, val) {
            (index === 'head') ? $(document).attr("title", val['title']) : false;
            $(index).children().each(function () {
                $(this).text(val[$(this).attr('key')])
            })
        })
    })
    
}

// Auto Loader
$(document).ready(function () {
    if (language != null && language !== default_lang)
        getLanguage(language);
});
