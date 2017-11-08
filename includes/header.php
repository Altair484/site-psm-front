<!doctype html>
<!--[if IE 7]><html lang="fr" class="ie7"><![endif]-->
<!--[if IE 8]><html lang="fr" class="ie8"><![endif]-->
<!--[if IE 9]><html lang="fr" class="ie9"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><html lang="en"><![endif]-->
<!--[if !IE]><html lang="fr-FR"><![endif]-->
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>PSM</title>

    <!-- CSS -->
    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet" media="screen">

    <!-- Font Awesome CSS -->
    <link href="css/font-awesome.min.css" rel="stylesheet" media="screen">

    <!-- Custom styles CSS -->
    <link href="css/main.css" rel="stylesheet" media="screen">
</head>
<body id="main-content">
<!--[if lt IE 8]>
<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->

<?php $file =  basename($_SERVER['REQUEST_URI'], '?' . $_SERVER['QUERY_STRING']); ?>
<header class="header">
    <nav id="main-nav">
        <div class="burger">
            <a href="#" data-toggle="#main-nav" id="sidebar-toggle">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </a>
        </div>
        <!--Todo: class is-home -> php conditions-->
        <div id="sidebar" class="<?php if($file == 'index.php')echo('is-home') ?> open-sidebar" >
            <div id="logo-psm-nav" >
                <img src="img/svg/psm-logo.svg" alt="Logo du menu PSM">
            </div>
            <ul>
                <li><a href="#" class="active">Accueil</a></li>
                <li class="dropdown">
                    <p>Formations&nbsp;<i class="fa fa-chevron-down"></i></p>
                    <div class="dropdown-content">
                        <a href="#">Licence PSM</a>
                        <a href="#">Master 1 PSM</a>
                        <a href="#">Master 2 PSM</a>
                    </div>
                </li>
                <li><a href="#">Projets</a></li>
                <li><a href="#">Espace pro</a></li>
                <li><a href="#">Actualités</a></li>
                <li><a href="#">Contact</a></li>
                <li class="dropdown">
                    <i class="fa fa-power-off"></i>
                    <div class="dropdown-content">
                        <a href="#">Connexion</a>
                        <a href="#">Inscription</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</header>
<div class="container-fuild">


