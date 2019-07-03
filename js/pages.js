const pages = {
    OT:
        '',
    day01:
        '<h2 class="centerText">day1.das alphabet</h2>\
        <section>\
            <h3 class="LeftText">Vowels</h3>\
            <ul>\
                <li>A a[a:]</li>\
                <li>E e[e:]</li>\
                <li>I i[i:]</li>\
                <li>O o[o:]</li>\
                <li>U u[u:]</li>\
            </ul>\
        </section>\
        <section>\
            <h3 class="LeftText">Consonants</h3>\
            <ul>\
                <li>B b[be:]</li>\
                <li>C c[tse:]</li>\
                <li>D d[de:]</li>\
                <li>F f[&epsilon;f:]</li>\
                <li>G g[ge:]</li>\
                <li>H h[ha:]\
                    <ul>\
                        <li>In the first char,think of it gargling with spanish H but with less..</li>\
                        <li>In the middle char,it is not pronounced.</li>\
                    </ul>\
                </li>\
                <li>J j[jot:]\
                    <ul>\
                        <li>Actually close to english Y or i</li>\
                    </ul>\
                </li>\
                <li>K k[ka:]</li>\
                <li>L l[&epsilon;l:]</li>\
                <li>M m[&epsilon;m:]</li>\
                <li>N n[&epsilon;n:]</li>\
                <li>P p[pe:]</li>\
                <li>Q q[ku:]</li>\
                <li>R r[&epsilon;r:]\
                    <ul>\
                        <li>e--a--kh!</li>\
                        <li>close to Slight Spanish J</li>\
                    </ul>\
                </li>\
                <li>S s[&epsilon;s:]\
                    <ul>\
                        <li>Based on the context</li>\
                        <li>It can be english s and z</li>\
                    </ul>\
                </li>\
                <li>T t[te:]</li>\
                <li>V v[fau:]\
                    <ul>\
                        <li>Based on the context</li>\
                        <li>It can be english f and v</li>\
                        <li>most of the time, f</li>\
                    </ul>\
                </li>\
                <li>W w[ve:]</li>\
                <li>X x[iks:]</li>\
                <li>Y y[yspsilon:]\
                    <ul>\
                        <li>i or Ü</li>\
                        <li>most of the time, i</li>\
                    </ul>\
                </li>\
                <li>Z z[ts&epsilon;t:]</li>\
            </ul>\
        </section>\
        <section>\
            <h3 class="LeftText">Deutsche Only Special Letter</h3>\
            <ul>\
                <li>Ö ö[O closing with e]\
                    <ul>\
                        <li>Use nasal E for O.</li>\
                    </ul>\
                </li>\
                <li>Ü ü[U closing with e]</li>\
                <li>Ä ä[A closing with e]</li>\
                <li>ß ß[ss/sharp s]\
                    <ul>\
                        <li>Always come after the long vowel</li>\
                    </ul>\
                </li>\
            </ul>\
        </section>',
    day02:
        '<h2 class="leftText">day2.mixed pronounciation</h2>\
        <section>\
            <h3 class="centerText">Diphtonge</h3>\
            <blockquote>\
                Two Vowels put together to have special pronounciation.\
            </blockquote>\
            <div class="clearB"></div>\
            <ul class="floatL">\
                <li><emR>ei</emR>[<emB>ai</emB>:]\
                    <ul>\
                        <h4 class="leftText">Examples</h4>\
                        <li>das <emR>Ei</emR>=<emB>the egg</emB></li>\
                        <li>die L<emR>ei</emR>ter=<emB>the ladder</emB></li>\
                        <li>der <emR>Ei</emR>mer=<emB>the bucket</emB></li>\
                    </ul>\
                </li>\
                <li><emR>eu</emR>[<emB>oi</emB>:]\
                    <ul>\
                        <h4 class="leftText">Examples</h4>\
                        <li>die <emR>Eu</emR>le=<emB>the owl</emB></li>\
                        <li><emR>Eu</emR>ropater=<emB>europe</emB></li>\
                        <li>das <emR>Eu</emR>ter=<emB>the udder</emB></li>\
                    </ul>\
                </li>\
                <li><emR>äu</emR>[<emB>oi</emB>:] as for plural form\
                    <ul>\
                        <h4 class="leftText">Examples</h4>\
                        <li>die Haut->die H<emR>äu</emR>te=<emB>the skin->skins</emB></li>\
                        <li>die Maus->2 M<emR>äu</emR>s=<emB>the mice->two mouses</emB></li>\
                        <li>das Haus->das H<emR>äu</emR>schen=<emB>house->houses</emB></li>\
                    </ul>\
                </li>'+
                '<li><emR>sch</emR>[<emB>wie</emB>:] from shake or shut of shift\
                    <ul>\
                        <h4 class="leftText">Examples</h4>\
                        <li>das <emR>Sch</emR>wein=<emB>the pig</emB></li>\
                        <li>die <emR>Sch</emR>weiz=<emB>the Swiss</emB></li>\
                        <li><emR>Sch</emR>wanger=<emB>pregnant</emB></li>\
                    </ul>\
                </li>\
                <li><emR>st</emR>[<emB>scht</emB>:]\
                    <ul>\
                        <h4 class="leftText">Examples</h4>\
                        <li><emR>St</emR>uttgart=<emB>stuttgart</emB></li>\
                        <li>die <emR>St</emR>raße=<emB>the street</emB></li>\
                        <li>das <emR>St</emR>inktier=<emB>the skunk</emB></li>\
                    </ul>\
                </li>\
                <li><emR>ie</emR>[long <emB>i</emB>:]\
                    <ul>\
                        <h4 class="leftText">Examples</h4>\
                        <li>das Kn<emR>ie</emR>=<emB>the knee</emB></li>\
                    </ul>\
                </li>\
            </ul>'+
            '<ul class="floatL">\
                <li><emR>sp</emR>[<emB>schp</emB>:]\
                    <ul>\
                        <h4 class="leftText">Examples</h4>\
                        <li>der <emR>Sp</emR>ort=<emB>the sport</emB></li>\
                        <li><emR>Sp</emR>anien=<emB>spain</emB></li>\
                        <li>das <emR>Sp</emR>iel=<emB>the game</emB></li>\
                    </ul>\
                </li>\
                <li><emR>ch</emR>[<emB>h</emB>: in English]\
                    <ul>\
                        <h4 class="leftText">Examples</h4>\
                        <li>I<emR>ch</emR>=<emB>I</emB></li>\
                        <li>die Bü<emR>ch</emR>er=<emB>the book</emB></li>\
                        <li>die Kir<emR>ch</emR>e=<emB>the church</emB></li>\
                    </ul>\
                </li>\
                <li><emR>ck</emR>[<emB>k</emB>: in English] Pronounce it <emB>briefly</emB>\
                    <ul>\
                        <h4 class="leftText">Examples</h4>\
                        <li>die De<emR>ck</emR>e=<emB>the blanket</emB></li>\
                        <li>die Ze<emR>ck</emR>e=<emB>the tick</emB></li>\
                        <li>das St<emR>ü</emR>ck=<emB>the piece</emB></li>\
                    </ul>\
                </li>\
                <li><emR>tz</emR>[<emB>z</emB>: in Deutsche]\
                    <ul>\
                        <h4 class="leftText">Examples</h4>\
                        <li>der Scha<emR>tz</emR>=<emB>the treasure</emB></li>\
                        <li>der Pla<emR>tz</emR>=<emB>the place</emB></li>\
                    </ul>\
                </li>'+
                '<li><emR>tzt</emR>[<emB>zt</emB>:]\
                    <ul>\
                        <h4 class="leftText">Examples</h4>\
                        <li>je<emR>tzt</emR>=<emB>now</emB></li>\
                    </ul>\
                </li>\
                <li><emR>h in the middle</emR> make the <emB>vowel long</emB>.\
                    <ul>\
                        <h4 class="leftText">Examples</h4>\
                        <li>ste<emR>h</emR>len=<emB>stealing</emB></li>\
                        <li>se<emR>h</emR>en=<emB>seeing</emB></li>\
                        <li>ge<emR>h</emR>en=<emB>walking</emB></li>\
                    </ul>\
                </li>\
                <li><emR>two same consonant in a row</emR> make it <emB>short and closed</emR>\
                    <ul>\
                        <h4 class="leftText">Examples</h4>\
                        <li>ko<emR>mm</emR>en=<emB>come!</emB></li>\
                        <li>e<emR>ss</emR>en=<emB>eat</emB></li>\
                    </ul>\
                </li>\
            </ul>\
            <div class="clearB"></div>\
        </section>',
    day03:
        '<h2 class="leftText">day03.Self-introduction and others</h2>\
        <section>\
            <h3 class="centerText">Self-introduction</h3>\
            <div>\
                When giving the first word to the person,\
                <blockquote>\
                    Guten Tag! Mein name ist ~~~\
                    <div class="indented">\
                        Good Day! My name is ~~~.\
                    </div>\
                </blockquote>\
                When you want to express your age,\
                <blockquote>\
                    Ich bin ~~ jahre alt.\
                    <div class="indented">\
                        I am ~~~ years old.\
                    </div>\
                </blockquote>\
            </div>\
            <div>'+  
                'When you want to say where you are from and explain your home time is from..\
                <blockquote>\
                    Ich komme aus ~~~.\
                    <div class="indented">\
                        I am from ~~~.\
                    </div>\
                    ~~~ ist in ~~~.\
                    <div class="indented">\
                        ~~~ is in ~~~.\
                    </div>\
                </blockquote>\
            </div>\
        </section>\
        <section>\
            <h3 class="centerText">Asking others</h3>\
            <div>\
                When you wanna ask other&rsquo;s name\
                <blockquote>\
                    Wie ist dein name?\
                    <div class="indented">\
                        What is your name?\
                    </div>\
                    Mein Name ist ~~~.\
                    <div class="indented">\
                        My name is ~~~.\
                    </div>\
                </blockquote>\
                or...'+
                '<blockquote>\
                    Wer bist du?\
                    <div class="indented">\
                        Who are you?\
                    </div>\
                    Ich bin ~~~.\
                    <div class="indented">\
                        I am ~~~.\
                    </div>\
                </blockquote>\
                or...'+
                '<blockquote>\
                    Wie heißt du?\
                    <div class="indented">\
                        what is your name?\
                    </div>\
                    Ich heiße ~~~.\
                    <div class="indented">\
                        My name is ~~~.\
                    </div>\
                </blockquote>\
            </div>\
            <div>\
                When you ask how old they are!\
                <blockquote>\
                    Wie alt sind sie?/Wie alt bist du?'+
                    '<div class="indented">\
                        how old are you?\
                    </div>\
                    Ich bin ~~~ jahre alt\
                    <div class="indented">\
                        I am ~~~ years old.\
                    </div>\
                </blockquote>\
            </div>\
        </section>'+
        '<section>\
            When asking languages your partner speaks\
            <blockquote>\
                Welche Sprachen sprichst Du?/Welche Sprachen sprechen Sie?\
                <div class="indented">\
                    Which language do you speak?\
                </div>'+
                'Ich spreche Englisch, Japanisch, und ein wenig Deutsch.\
                <div class="indented">\
                    I speak english,Japanese, and little German.\
                </div>\
            </blockquote>\
        </section>\
        <section>\
            <h3 class="centerText">Examples</h3>\
            <section>\
                <h4>Conversation between Rodrigo, Alexander and Mister Yang</h4>\
                <blockquote>\
                    <ul class="noBulletPt">'+
                        '<li>Wie Geht es Dir? = how are you?</li>\
                        <li>Es Geht mir gut! = I am fine!</li>\
                        <li>Wie alt bist du Rodrigo? = How old are you, Rodrigo?</li>\
                        <li>Ich bin ~~ Jahre alt. Und du? I am ~~ years old. and you?</li>\
                        <li>Ich bin ~~ jahre alt. Welche Sprachen sprichst Du?\
                            =I am ~~ years old. \
                        </li>\
                        <li>Ich spreche Spanisch, Englisch, und ein wenig Duetsch.\
                            =I speak Spanish, English, and a little German.\
                        </li>\
                        <li>Entschuldigung.und wie heißen Sie?\
                            =excuse me,What is your name?\
                        </li>\
                        <li>\
                            Ich bin Herr Yang.=I am mister Yang.\
                        </li>\
                        <li>\
                            Guten tag, Herr Yang. Ich bin Alexander. Und das ist Rodrigo.\
                            =Good afternoon mister Yang. I am Alexander and this is Rodrigo.\
                        </li>\
                    </ul>\
                </blockquote>'+
                '<div>\
                    <h4>Quiz</h4>\
                    <ol>\
                        <li><input type="text">Guten Tag!Mein Name ist Peter.\
                            Good afternoon My name is peter/</li>\
                        <li><input type="text">Hallo.Ich bin Markus.Hello I am Marcus</li>\
                        <li><input type="text">Wie geht es dir? How are you?</li>\
                        <li><input type="text">Es geht mir gut! I am fine!</li>\
                        <li><input type="text">Wie ist dein name? What is your name?</li>\
                        <li><input type="text">Mein Name ist Stefan. My name is Stephan</li>\
                    </ol>\
                </div>\
            </section>\
        </section>',
    day04:
        '',
    day05:
        '',
    day06:
        '' 
};