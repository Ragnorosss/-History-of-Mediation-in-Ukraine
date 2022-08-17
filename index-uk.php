<!DOCTYPE html>
<html lang="uk">
<!-- Head -->

<head>
    <!-- Meta -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Links css -->
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/burger.css">
    <link rel="stylesheet" href="css/SearchBar.css">
    <link rel="stylesheet" href="css/pagination.css">
    <link rel="stylesheet" href="css/filters.css">
    <link rel="stylesheet" href="css/scrollbar.css">
    <link rel="stylesheet" href="css/block.css">
    <link rel="stylesheet" href="css/style-lib.css">
    <link rel="stylesheet" href="css/filters-adaptive.css">
    <link rel="stylesheet" href="css/filters-adaptive-buttons.css">
    <!-- Title -->
    <title>Iсторiя медiацiї в Українi</title>
</head>
<!-- Body -->

<body>
<?php
    require_once "html-elements/language/headers/header-uk.php";
?>
<!--/.header-->

<!-- MAIN -->
<main class="main">
    <!-- ASIDE -->
    <div class="aside">
        <!-- Filter -->
        <div class="articles-block">
            <div class="filters" id="filters">
                <form class="filter__form">
                    <ul>
                        По перiодам
                        <li>
                            <label class="container"><span class="filters__label">90-тi роки</span>
                                <input type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </li>
                        <li>
                            <label class="container"><span class="filters__label">1998-2004</span>
                                <input type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </li>
                        <li>
                            <label class="container"><span class="filters__label">2004-2010</span>
                                <input type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </li>
                        <li>
                            <label class="container"><span class="filters__label">2010-2014</span> <input type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </li>
                        <li>
                            <label class="container"><span class="filters__label">2014-н.ч</span>
                                <input type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </li>
                    </ul>
                    <hr class="hr">
                    <ul>
                        По темам
                        <li>
                            <label class="container"><span class="filters__label">Тема 1</span>
                                <input type="checkbox">
                                <span class="checkmark-topics"></span>
                            </label>
                        </li>
                        <li>
                            <label class="container"><span class="filters__label">Тема 2</span>
                                <input type="checkbox">
                                <span class="checkmark-topics"></span>
                            </label>
                        </li>
                        <li>
                            <label class="container"><span class="filters__label">Тема 3</span>
                                <input type="checkbox">
                                <span class="checkmark-topics"></span>
                            </label>
                        </li>
                        <li>
                            <label class="container"><span class="filters__label">Тема 4</span>
                                <input type="checkbox">
                                <span class="checkmark-topics"></span>
                            </label>
                        </li>
                        <li>
                            <label class="container"><span class="filters__label">Тема 5</span>
                                <input type="checkbox">
                                <span class="checkmark-topics"></span>
                            </label>
                        </li>
                        <li>
                            <label class="container"><span class="filters__label">Тема 6</span>
                                <input type="checkbox">
                                <span class="checkmark-topics"></span>
                            </label>
                        </li>
                        <li>
                            <label class="container"><span class="filters__label">Тема 7</span>
                                <input type="checkbox">
                                <span class="checkmark-topics"></span>
                            </label>
                        </li>
                        <li>
                            <label class="container"><span class="filters__label">Тема 8</span>
                                <input type="checkbox">
                                <span class="checkmark-topics"></span>
                            </label>
                        </li>
                    </ul>
                    <hr class="hr">
                    <ul>
                        По датi
                        <li><input type="text" name="search-date" placeholder="Введiть начало" class="search-date"></li>
                        <li><input type="text" name="search-date" placeholder="Введiть кiнець" class="search-date"></li>
                    </ul>
                    <div class="move-down-icon">
                        <hr>
                        <a href="#" onclick="scrollDown()"><svg xmlns="http://www.w3.org/2000/svg"
                                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="77px" height="19px"
                                                                style="margin-top: 20px;">
                                <image x="0px" y="0px" width="77px" height="19px"
                                       xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAATCAMAAADiU3AFAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAw1BMVEX///+tr7JUVVarrbCUlplISUrAwsaho6dTVFU9Pj9SU1Woqa2TlZhHSEqpqq1SU1SRk5bS09iJio1dXmCmp6poaWtnaGq5u76lpql8fX/S1NjAwcXR09doamxmZ2mqrK9HSEl7fX7Nz9NmaGmRkpW5ur68vcJHSUqQkZTO0NN7fX9naGu8vsLO0NR7fH6nqKxcXl+mqKu/wcWPkZOnqKuqq6+kpqmdnqGSk5aTlJeQkpSlp6pyc3WlpqpcXV6jpaj///9OvdwdAAAAQHRSTlMAM6A1UK8bP6O9ozhTrzijVQVflz2IiiQ9cAUbBYiKNbFyCopVJCCvVwpwiCAKcjqXOhtXOjU9RlVTVz18PZk/VyaWoQAAAAFiS0dEAIgFHUgAAAAHdElNRQfmCAULAxlIdP0uAAAA60lEQVQ4y63T6Q6CMAwAYFREqiAeIHhPEW/xvq/3fys7IoYQUCb0F+maL+1WuFQ6wyUTfFbgciLkCwlYkgwydYoiKKVyPKsiQ1V9f6tKLE/QAGq6J2EoAPXGX1bTb328FrvVBujoAQeOxzZvVwPS64cc6iZTf3wWyOBbgVVDbxjJkkZAxr+KJlOA2TwZi8bCRm/5tQTXa2VEvRDqKaGeELQSP+cN9uh6mUyW49n4g6z92Q21LFbLmXeL3s6b2aNl9/+xnP4O6B3dhZbyEZ8xPKh3ogt9loFc4lk0rtjSrU5i9+XG/YFX/4xS+QJmsBKHSUX9wQAAAABJRU5ErkJggg==" />
                            </svg></a>
                    </div>
                    <hr class="hr">
                    <ul>
                        По перiодам
                        <li>
                            <label class="container"><span class="filters__label">90-тi роки</span>
                                <input type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </li>
                        <li>
                            <label class="container"><span class="filters__label">1998-2004</span>
                                <input type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </li>
                        <li>
                            <label class="container"><span class="filters__label">2004-2010</span>
                                <input type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </li>
                        <li>
                            <label class="container"><span class="filters__label">2010-2014</span>
                                <input type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </li>
                        <li>
                            <label class="container"><span class="filters__label">2014-н.ч</span>
                                <input type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </li>
                    </ul>
                </form>
                <div style="height: 100px;" id="bott-search"></div>
            </div>
            <div class="search"></div>
            <div class="articles"></div>
            <div class="prev-next"></div>
        </div>
        <!--/.filter-->
    </div>
    <!--/.aside-->

    <!-- Main Content -->
    <div class="main-content">
        <!-- Search -->
        <div class="articles-search">
            <div class="articles-search__item">
                <img class="search__img" src="./icons/search_logo.svg" />
                <input class="search-input" type="text" placeholder="Введiть назву статi або iм’я автора"></input>
                <img class="search__img filter__img" src="./icons/filter_logo.svg" />
            </div>
        </div>
        <!--/.search-->

        <!-- Filter-Mobile -->
        <div class="filters-mobile">
            <form class="filter__form">
                <a href="#"><img class="filter-img" src="./icons/filter_logo.svg" /></a>
                <ul>
                    <li><a href="#">По перiодам</a>
                        <ul>
                            <ul>
                                <li>
                                    <label class="container-dropdown">
                                        <input type="checkbox">
                                        <span class="checkmark-dropdown"></span>
                                        <span class="period-text">90-тi роки</span>
                                    </label>
                                </li>
                                <li>
                                    <label class="container-dropdown">
                                        <input type="checkbox">
                                        <span class="checkmark-dropdown"></span>
                                        <span class="period-text">1998-2004</span>
                                    </label>
                                </li>
                                <li>
                                    <label class="container-dropdown">
                                        <input type="checkbox">
                                        <span class="checkmark-dropdown"></span>
                                        <span class="period-text">2004-2010</span>
                                    </label>
                                </li>
                                <li>
                                    <label class="container-dropdown">
                                        <input type="checkbox">
                                        <span class="checkmark-dropdown"></span>
                                        <span class="period-text">2010-2014</span>
                                    </label>
                                </li>
                                <li>
                                    <label class="container-dropdown">
                                        <input type="checkbox">
                                        <span class="checkmark-dropdown"></span>
                                        <span class="period-text">2014-н.ч</span>
                                    </label>
                                </li>
                            </ul>
                        </ul>
                    </li>
                    <li><a href="#">По темам</a>
                        <ul>
                            <ul>
                                <li>
                                    <label class="container-dropdown"><span class="period-text">Тема 1</span>
                                        <input type="checkbox">
                                        <span class="checkmark-topics-dropdown"></span>
                                    </label>
                                </li>
                                <li>
                                    <label class="container-dropdown"><span class="period-text">Тема 2</span>
                                        <input type="checkbox">
                                        <span class="checkmark-topics-dropdown"></span>
                                    </label>
                                </li>
                                <li>
                                    <label class="container-dropdown"><span class="period-text">Тема 3</span>
                                        <input type="checkbox">
                                        <span class="checkmark-topics-dropdown"></span>
                                    </label>
                                </li>
                                <li>
                                    <label class="container-dropdown"><span class="period-text">Тема 4</span>
                                        <input type="checkbox">
                                        <span class="checkmark-topics-dropdown"></span>
                                    </label>
                                </li>
                                <li>
                                    <label class="container-dropdown"><span class="period-text">Тема 5</span>
                                        <input type="checkbox">
                                        <span class="checkmark-topics-dropdown"></span>
                                    </label>
                                </li>
                                <li>
                                    <label class="container-dropdown"><span class="period-text">Тема 6</span>
                                        <input type="checkbox">
                                        <span class="checkmark-topics-dropdown"></span>
                                    </label>
                                </li>
                                <li>
                                    <label class="container-dropdown"><span class="period-text">Тема 7</span>
                                        <input type="checkbox">
                                        <span class="checkmark-topics-dropdown"></span>
                                    </label>
                                </li>
                                <li>
                                    <label class="container-dropdown"><span class="period-text">Тема 8</span>
                                        <input type="checkbox">
                                        <span class="checkmark-topics-dropdown"></span>
                                    </label>
                                </li>
                            </ul>
                        </ul>
                    </li>
                    <li><a href="#">По датi</a>
                        <ul class="date-ul">
                            <li><input type="text" name="search-date" placeholder="ДД/MM/ГГГГ" class="search-date-dropdown">
                            </li>
                            <li><input type="text" name="search-date" placeholder="ДД/MM/ГГГГ" class="search-date-dropdown">
                            </li>
                        </ul>
                    </li>
                </ul>
            </form>
        </div>
        <!--/.Filter-Mobile-->
        <!-- Block -->
        <?php require "html-elements/language/articles/article-uk.php"?>
        <!--/.block-->
        <!-- Block -->
        <?php require "html-elements/language/articles/article-uk.php"?>>
        <!--/.block-->
        <!-- Block -->
        <?php require "html-elements/language/articles/article-uk.php"?>
        <!--/.block-->
        <!-- Paginatoin -->
        <div class="articles-pagination">
            <div onclick="moveButtonChoice(-1)" id="back" class="control-text">Назад</div>
            <ul class="control-numbers">
                <li onclick="changeActivePagination(1)" class="item control-numbers__item--active" id="button-1">1</li>
                <li onclick="changeActivePagination(2)" class="item control-numbers__item" id="button-2">2</li>
                <li onclick="changeActivePagination(3)" class="item control-numbers__item" id="button-3">3</li>
                <li onclick="changeActivePagination(4)" class="item control-numbers__item" id="button-4">4</li>
            </ul>
            <div onclick="moveButtonChoice(1)" id="forward" class="control-text">Вперед</div>
        </div>
        <!--/.pagination-->

    </div>
</main>
<!--/.main-->
<!-- Footer -->
<?php
    require_once "html-elements/language/footers/footer-uk.php"
?>
<!--/.footer-->
<!-- JavaScript -->
<script src="js/buttons.js"></script>
<script src="js/lang.js"></script>
<script src="js/main.js"></script>
<script src="js/filters.js"></script>
</body>

</html>