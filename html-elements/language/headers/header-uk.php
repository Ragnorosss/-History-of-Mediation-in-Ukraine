<header class="header">
    <div class="header-container">
        <div class="header__wrapper">
            <a href="#hero" class="header__logo" id="top"><img src="./img/logo.svg" alt="Logo image"
                                                               class="header-logo__img"></a>

            <!--burger-menu-start-->
            <div class="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn" for="menu__toggle">
                    <span></span>
                </label>

                <ul class="menu__box">
                    <li><a class="menu__item-burger" href="#">Головна</a></li>
                    <li><a class="menu__item-burger" href="#">Спогади</a></li>
                    <li><a class="menu__item-burger" href="#">Бібліотека</a></li>
                    <li><a class="menu__item-burger" href="#">Контакти</a></li>
                    <div class="icons">
                        <a href="#" class="icon__link">
                            <img src="./icons/facebook.png" alt="" class="icon__item">
                        </a>
                        <a href="#" class="icon__link">
                            <img src="./icons/youtube.png" alt="" class="icon__item">
                        </a>
                    </div>
                    <div class="languages">
                        <a class="burger-lang" href="../PHP/index-uk.php">
                            <img class="burger-lang" src="./icons/ukr.png" alt="ukr" value="uk" id="uk-flag">
                        </a>
                        <a class="burger-lang" href="../PHP/index-en.php">
                            <img class="burger-lang" src="./icons/eng.png" alt="ukr" value="en" id="en-flag">
                        </a>
                        <a class="burger-lang" href="../PHP/index-ru.php">
                            <img class="burger-lang" src="./icons/rus.png" alt="ukr" value="uk" id="ru-flag">
                        </a>
                    </div>

                </ul>
            </div>
            <!--burger_end-->

            <nav class="nav__menu">
                <ul class="menu__items">
                    <li class="menu__item">
                        <a href="#" class="menu-item__link">Головна</a>
                    </li>
                    <li class="menu__item">
                        <a href="#" class="menu-item__link">Спогади</a>
                    </li>
                    <li class="menu__item">
                        <a href="#" class="menu-item__link">Бібліотека</a>
                    </li>
                    <li class="menu__item">
                        <a href="#" class="menu-item__link">Контакти</a>
                    </li>
                </ul>
            </nav>
            <a href="#" class="header__button">для авторiв</a>
            <div class="language">
                <img src="./icons/ukr.png" alt="uk" value="uk" id="uk-flag">
                <select name="lang" id="lang" onchange="changeFlag()">
                    <option value="uk">Українська</option>
                    <option value="ru">Русский</option>
                    <option value="en">English</option>
                </select>
            </div>
        </div>
    </div>
</header>
<!--/.header-->