<header class="header">
    <div class="container">
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
                    <li><a class="menu__item-burger" href="#">Главная</a></li>
                    <li><a class="menu__item-burger" href="#">Воспоминания</a></li>
                    <li><a class="menu__item-burger" href="#">Библиотека</a></li>
                    <li><a class="menu__item-burger" href="#">Контакты</a></li>
                    <div class="icons">
                        <a href="#" class="icon__link">
                            <img src="./icons/facebook.png" alt="" class="icon__item">
                        </a>
                        <a href="#" class="icon__link">
                            <img src="./icons/youtube.png" alt="" class="icon__item">
                        </a>
                    </div>
                </ul>
            </div>
            <!--burger_end-->

            <nav class="nav__menu">
                <ul class="menu__items">
                    <li class="menu__item">
                        <a href="#" class="menu-item__link">Главная</a>
                    </li>
                    <li class="menu__item">
                        <a href="#" class="menu-item__link">Воспоминания</a>
                    </li>
                    <li class="menu__item">
                        <a href="#" class="menu-item__link">Библиотека</a>
                    </li>
                    <li class="menu__item">
                        <a href="#" class="menu-item__link">Контакты</a>
                    </li>
                </ul>
            </nav>
            <a href="#" class="header__button">для авторов</a>
            <div class="language">
                <select name="lang" id="lang" onchange="changeFlag()">
                    <option value="ru">Русский</option>
                    <option value="uk">Українська</option>
                    <option value="en">English</option>
                </select>
            </div>
        </div>
    </div>
</header>
<!--/.header-->