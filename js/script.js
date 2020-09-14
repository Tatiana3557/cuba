//include('alert.js')
//include('slick.min.js')


//функція підтримки зображень: webpcss
function testWebP(callback) {
    var webP = new Image(); webP.onload = webP.onerror = function () { callback(webP.height == 2); }; webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    
    }
    
    testWebP(function (support) {
    if (support == true) { document.querySelector('body').classList.add('webp'); }else{ document.querySelector('body').classList.add('no-webp'); }
    
    });
    

    

function fontsStyle(params) {
    let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss'); if (file_content == '') { fs.writeFile(source_folder + '/scss/fonts.scss', '', cb); return fs.readdir(path.build.fonts, function (err, items) { if (items) { let c_fontname; for (var i = 0; i < items.length; i++) { let fontname = items[i].split('.'); fontname = fontname[0]; if (c_fontname != fontname) { fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb); } c_fontname = fontname; } } }) }
    
    }
    
 function ibg(){
     $.each($('.ibg'), function(index, val) { if($(this).find('img').length>0){ $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")'); } });
        
     }
        
     ibg();
        

     $(function(){
        $('.photo__slider').slick({
            nextArrow: '<button class="slick-arorow slick-next"><img src="img/arrow-right.svg" alt="next arrow"></button>',
            prevArrow: '<button class="slick-arorow slick-prev"><img src="img/arrow-left.svg" alt="prev arrow"></button>',
            fade: true,
            responsive: [
                {
                    breakpoint: 441,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });
    });
         