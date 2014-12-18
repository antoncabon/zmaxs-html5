/**
 * Lipsum-UI scripts. These are the lines that will create a miracle
 * Please note that I created this tool when I was 19 years old. So do not blame me if there's a lots of things are not so efficient :p
 */

$(function() {

    $('#area').sortable();

    $('button').button();
    $('div.panel button.add').button({icons:{primary:"ui-icon-circle-plus"}});

    $('#mainButton').draggable({axis:"y"})

    $('#akordion').accordion({autoHeight:false});
    $('#open, a.jokes').button({icons:{primary:"ui-icon-wrench", secondary:"ui-icon-triangle-1-s"}}).live("click", function() {
        $('#sidebar').dialog({
            title:"Options",
            width:470,
            resizable:false,
            show:"slide",
            hide:"blind",
            position: {
                my: 'right top',
                at: 'right top'
            }
        });
        return false;
    });

    
    var list = '<li>This is an example list 1</li><li>This is an example list 2</li><li>This is an example list 3</li><li>This is an example list 4</li><li class="remove"><a class="plus" href="#">add more (+)</a> <a class="minus" href="#">delete (&times;)</a></li>',
        trow = '<tr><td>Division 1.1</td><td>Division 1.2</td><td>Division 1.3</td><td>Division 1.4</td></tr><tr><td>Division 2.1</td><td>Division 2.2</td><td>Division 2.3</td><td>Division 2.4</td></tr><tr><td>Division 3.1</td><td>Division 3.2</td><td>Division 3.3</td><td>Division 3.4</td></tr><tr class="remove"><td colspan="4" class="ui-widget-header"><a class="plus" href="#">add row (+)</a> <a class="minus" href="#">delete row (&times;)</a></td></tr>';




    // UMMM... FUNCTIONS
    function removing() {
        $('div.sortable').find('input.remove:checkbox').change(function() {
            if ($(this).is(':checked')) {
                $(this).parent().addClass('active');
            } else {
                $(this).parent().removeClass('active');
            }
        });
    }
    function hoverImg() {
        $('div.separator').hover(function() {
            $('div.image-option', this).show();
        }, function(){
            $('div.image-option', this).hide();
        });
    }
    function toggClass() {
    
        $('div.image-option').hover(function() {
            $(this).addClass('hover');
        }, function() {
            $(this).removeClass('hover');
        });
    
        $('div.image-option a').bind("click", function(){
            $('div.image-option.hover a.selected').removeClass('selected');
            $(this).addClass('selected');
        });
    }
    function anime() {        
        $('div.sortable.hidden').slideDown(600, "easeOutBounce");
    }
        removing();
        hoverImg();
        toggClass();





    // HEADER SECTION
    $('#header .choose').button({icons:{primary:"ui-icon-plusthick"}}).click(function() {
        var hlevel = $(this).attr('id'),
               alt = $(this).attr('alt');
        $('#area').prepend('<div class="sortable head hidden"><' + hlevel + '>Example Heading ' + alt + '</' + hlevel + '><input type="checkbox" class="remove" /></div>');
        anime();
        removing();
    });




    // PARAGRAPH SECTION
    $('#addParagraph').click(function() {
        var paragraph = $('textarea#pg').val(),
               imgUrl = $('#imageSource').val();
        $('#area').prepend('<div class="sortable hidden"><div class="separator" style="float:left;margin:0px 10px 10px 0px;"><img src="' + imgUrl + '" alt="Example image" /><div class="remove image-option ui-widget-header"><b>Float:</b> <a class="fleft selected" href="#">left</a> &bull; <a class="fright" href="#">right</a> &bull; <a class="fnone" href="#">none</a> &bull; <a class="dels" href="#">remove image</a></div></div><p>' + $.trim(paragraph) + '<span class="remove"> <a class="plus" href="#">add more words (+)</a> <a class="minus" href="#">undo add (&times;)</a></span></p><div class="remove clear"></div><input type="checkbox" class="remove" /></div>');
        anime();
        removing();
        hoverImg();
        toggClass();
    });

    $('#addPreBlock').click(function() {
        var teks = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.";
        $('#area').prepend('<div class="sortable hidden"><blockquote>' + $.trim(teks) + '</blockquote><pre>' + $.trim(teks) + '</pre><input type="checkbox" class="remove" /></div>');
        anime();
        removing();
    });

    $('#addOther').click(function() {
        $('#area').prepend('<div class="sortable hidden"><p>Lorem ipsum <abbr>abbr</abbr> dolor <strong>strong</strong> sit amet, <u>underline</u> consectetuer <i>italic</i> adipiscing elit, sed <em>emphasis</em> diam nonummy <b>bold</b> nibh euismod <code>another example code</code> tincidunt ut laoreet <a href="#">this is a link</a> dolore magna aliquam erat volutpat.</p><input type="checkbox" class="remove" /></div>');
        anime();
        removing();
    });




    // LIST SECTION
    $('#addul').click(function() {
        $('#area').prepend('<div class="sortable hidden"><ul>' + list + '</ul><input type="checkbox" class="remove" /></div>');
        anime();
        removing();
    });

    $('#addol').click(function() {
        $('#area').prepend('<div class="sortable hidden"><ol>' + list + '</ol><input type="checkbox" class="remove" /></div>');
        anime();
        removing();
    });




    // TABLE SECTION
    $('#addTable').click(function() {
        $('#area').prepend('<div class="sortable hidden"><table border="1"><tbody><tr><th>Table Header 1</th><th>Table Header 2</th><th>Table Header 3</th><th>Table Header 4</th></tr>' + trow + '</tbody></table><input type="checkbox" class="remove" /></div>');
        anime();
        removing();
    });



    // UGLY FORM SECTION
    $('#addForms').click(function() {
        $('#area').prepend('<div class="sortable hidden"><form><input type="text" /><br /><input type="text" /><br /><textarea>Example text...</textarea><br /><button>A Button</button><input value="A Reset Button" type="reset" /><input value="A Submit Button" type="submit" /><br /><input name="radio" type="radio" /> Male<br /><input name="radio" type="radio" /> Female<br /><input name="radio" type="radio" /> Other?<br /><input type="checkbox" /> I aggre with your opinion<br /><select><option>A Select Box</option><option>Option 1</option><option>Option 2</option><option>Option 3</option><option>Option 4</option><option>Option 5</option></select></form><input type="checkbox" class="remove" /></div>');
        anime();
        removing();
    });



    // VIDEO SECTION
    $('#addVideo').click(function() {
        var source1 = $('#source1').val(),
            source2 = $('#source2').val(),
            source3 = $('#source3').val();
        $('#area').prepend('<div class="sortable hidden"><div class="separator" style="clear:both;text-align:center;"><video width="320" height="240" style="margin:0px auto 0px;" controls="controls"><source src="' + source1 + '" type="video/ogg"><source src="' + source2 + '" type="video/mp4"><source src="' + source3 + '" type="video/webm">Your browser does not support the video tag. But you could include an iframe/embeded video here.</video></div><br /><br /><input type="checkbox" class="remove" /></div>');
        anime();
        removing();
        toggClass();
    });




    // INCREASE/DECREASE BUTTONS
    $('li a.plus').live("click", function() {
        var n = $(this).parent().siblings().length;
        $(this).parent().before('<li>This is an example list ' + (n+1) + '</li>');
        return false;
    });
    
    $('li a.minus').live("click", function() {
        $(this).parent().prev().remove();
        return false;
    });

    $('td a.plus').live("click", function() {
        var tn = $(this).parents('tr').siblings().length - 1;
        $(this).parents('tr').before('<tr><td>Division ' + (tn+1) + '.1</td><td>Division ' + (tn+1) + '.2</td><td>Division ' + (tn+1) + '.3</td><td>Division ' + (tn+1) + '.4</td></tr>');
        return false;
    });
    
    $('td a.minus').live("click", function() {
        $(this).parents('tr').prev().remove();
        return false;
    });

    $('p a.plus').live("click", function() {
        var paragraph = $('textarea#pg').val();
        $(this).parent().before($.trim('<span class="p hidden"> ' + paragraph + '</span>'));
        $('.p.hidden').fadeIn();
        return false;
    });
    
    $('p a.minus').live("click", function() {
        $(this).parent().prev().remove();
        return false;
    });




    // IMAGE OPTIONS
    $('div.separator a.fleft').live("click", function() {
        $(this).parents('div.separator').attr('style', 'float:left;margin:0px 10px 10px 0px;');
        $(this).parent().prev('img, video').removeAttr('style');
        return false;
    });

    $('div.separator a.fright').live("click", function() {
        $(this).parents('div.separator').attr('style', 'float:right;margin:0px 0px 10px 10px;');
        $(this).parent().prev('img, video').removeAttr('style');
        return false;
    });

    $('div.separator a.fnone').live("click", function() {
        $(this).parents('div.separator').attr('style', 'clear:both;display:block;margin:0px 0px 10px;text-align:center;');
        $(this).parent().prev('img, video').attr('style', 'margin:0px auto 10px');
        return false;
    });




    // DELETE!
    $('#removeAll').button({icons:{primary:"ui-icon-trash"}}).click(function() {
        $('#area').find('input:checkbox:checked').parent().slideUp(600, removed);
    });
    $('a.dels').live("click", function() {
        $('div.confirmbox').html('<span class="ui-icon ui-icon-alert" style="float:left;margin:0px 10px 0px 0px;"></span>Hey, this will not be returned. Are you sure?!').dialog({
            title:"Confirmation",
            modal:true,
            buttons:{
                "Yes I Do": function() {
                    $('a.dels.selected').parents('div.separator').remove();
                    $(this).dialog("close");
                },
                "Really?": function() {
                    $('div.confirmbox').html('<img src="images/meeeeeee.png" style="float:left;margin:0px 10px 0px 0px;" />No, I lied. Haha! To restore the image you just simply <a class="jokes" href="#">add a new paragraph</a>').dialog({
                        buttons:{
                            "Close": function() {
                                $(this).dialog("close");
                            }
                        }
                    });
                }
            }
        });
        return false;
    });

    function removed() {
        $('input:checkbox:checked').parent().remove();
    }




    // I SEE... :(O)
    $('#generate').button({icons:{primary:"ui-icon-carat-2-e-w"}}); 
    $('#generate').click(function() {
        var realContent = $('#area').clone();
        realContent.find('.remove').remove().next('<wbr />');
        realContent.find('.sortable').children().unwrap();
        realContent.find('span.p').contents().unwrap();
        var thecode = realContent.html().replace(/<\/?(br|wbr|h1|h2|h3|h4|h5|h6|ol|ul|li|p|blockquote|pre|form|textarea|select|option|table|table border="1"|tbody|tr|input type="text"|input name="radio" type="radio"|input type="checkbox"|button|input value="A Submit Button" type="submit")>/g, function(m){
            return {
        '<br>'  : '\n',
        '<wbr>' : '\n\n',
        '<h1>'  : '<h1>',
        '<h2>'  : '<h2>',
        '<h3>'  : '<h3>',
        '<h4>'  : '<h4>',
        '<h5>'  : '<h5>',
        '<h6>'  : '<h6>',
        '</h1>' : '</h1>\n',
        '</h2>' : '</h2>\n',
        '</h3>' : '</h3>\n',
        '</h4>' : '</h4>\n',
        '</h5>' : '</h5>\n',
        '</h6>' : '</h6>\n',
        '<p>'   : '<p>',
        '</p>'  : '</p>\n\n',
        '<blockquote>'     : '<blockquote>',
        '</blockquote>'    : '</blockquote>\n\n',
        '<pre>'            : '<pre>',
        '</pre>'        : '</pre>\n\n',
        '<ol>'          : '<ol>\n',
        '</ol>'         : '</ol>\n\n',
        '<ul>'          : '<ul>\n',
        '</ul>'         : '</ul>\n\n',
        '<li>'          : '     <li>',
        '</li>'         : '</li>\n',
        '<form>'        : '<form name="exampleform">\n',
        '</form>'       : '</form>\n\n',
        '<input type="text">'                           : '     <input type="text" style="width:270px;" />',
        '<input name="radio" type="radio">'             : '     <input name="radio" type="radio" />',
        '<input type="checkbox">'                       : '     <input type="checkbox" />',
        '<button>'                                      : '     <button>',
        '</button>'                                     : '</button>',
        '<input value="A Submit Button" type="submit">' : '<input value="A Submit Button" type="submit" />',
        '<textarea>'                                    : '     <textarea style="width:270px;height:120px;">',
        '</textarea>'                                   : '</textarea>',
        '<select>'                                      : '     <select style="width:270px;">\n',
        '</select>'                                     : '     </select>\n',
        '<option>'                                      : '          <option>',
        '</option>'                                     : '</option>\n',
        '<table border="1">'                            : '<table border="1">\n',
        '</table>'                                      : '</table>\n\n',
        '<tbody>'                                       : '<tbody>\n',
        '</tbody>'                                      : '</tbody>\n',
        '<tr>'                                          : '     <tr>',
        '</tr>'                                         : '</tr>\n'
            }[m]});
        $('#thecode').val(thecode);
        $('#thecode').dialog({
            title: "Generated Codes",
            width: 600,
            height: 470,
            show: "fade",
            hide: {effect:"explode", duration:1000},
            resizable: false,
            buttons: {
                "Select All": function() {
                    $(this).focus();$(this).select();
                },
                "Cancel": function() {
                    $(this).dialog("close");
                }
            }
        });
    });


});