<header class="header">
    <div class="header-container">
        <div class="header__wrapper">
            <a href="#top" class="header__logo"><img src="./img/logo.svg" alt="Logo image"
                                                               class="header-logo__img"></a>

            <!--burger-menu-start-->
            <div class="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn" for="menu__toggle">
                    <span></span>
                </label>

                <ul class="menu__box">
                    <li><a class="menu__item-burger" href="#">Home</a></li>
                    <li><a class="menu__item-burger" href="#">Memories</a></li>
                    <li><a class="menu__item-burger" href="#">Library</a></li>
                    <li><a class="menu__item-burger" href="#">Contacts</a></li>
                    <div class="icons">
                        <a href="#" class="icon__link">
                            <img src="./icons/facebook.png" alt="" class="icon__item">
                        </a>
                        <a href="#" class="icon__link">
                            <img src="./icons/youtube.png" alt="" class="icon__item">
                        </a>
                    </div>
                    <div class="languages">
                        <a class="burger-lang" href="index-ua.php">
                            <img class="burger-lang" src="./icons/ukr.png" value="ua" id="uk-flag">
                        </a>
                        <a class="burger-lang" href="index-en.php">
                            <img class="burger-lang" src="./icons/eng.png" value="en" id="en-flag">
                        </a>
                        <a class="burger-lang" href="index-ru.php">
                            <img class="burger-lang" src="./icons/rus.png" value="ru" id="ru-flag">
                        </a>
                    </div>
                </ul>
            </div>
            <!--burger_end-->

            <nav class="nav__menu">
                <ul class="menu__items">
                    <li class="menu__item">
                        <a href="#" class="menu-item__link">Home</a>
                    </li>
                    <li class="menu__item">
                        <a href="#" class="menu-item__link">Memories</a>
                    </li>
                    <li class="menu__item">
                        <a href="#" class="menu-item__link">Library</a>
                    </li>
                    <li class="menu__item">
                        <a href="#" class="menu-item__link">Contacts</a>
                    </li>
                </ul>
            </nav>
            <a href="#" class="header__button">for authors</a>
            <div class="language">
                <img src="./icons/eng.png" alt="eng" value="en" id="eng-flag">
                <select name="lang" id="lang" onchange="changeFlag()">
                    <option value="en">English</option>
                    <option value="ua">Українська</option>
                    <option value="ru">Русский</option>
                </select>
            </div>
        </div>
    </div>
</header>
<!--/.header-->