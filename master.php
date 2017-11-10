<?php include ('includes/header.php'); ?>
<section id="video-master-section">
    <div class="video-background" >
        <div class="video-foreground">
            <!--<iframe src="https://www.youtube.com/embed/NM2wtte1JRE?controls=2&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;&mute=1" frameborder="0" allowfullscreen=""></iframe>-->
            <div id="player"></div>
        </div>
    </div>
    <h1><i class="fa fa-graduation-cap"></i>&nbsp;Master Produits et Services Multimédia</h1>
</section>

<div id="masters">
    <section id="toggle-masters">
        <div class="row">
            <div class="choose-training col-6 no-padding <?php if (isset($_GET['formation']) and $_GET['formation'] == 'm1'){echo('active');} ?>">
                <button>Première année</button>
            </div>
            <div class="choose-training col-6 no-padding <?php if (isset($_GET['formation']) and $_GET['formation'] == 'm2'){echo('active');} ?>">
                <button>Deuxième année</button>
            </div>
        </div>
    </section>
    <div id="master-1" class="<?php if (isset($_GET['formation']) and $_GET['formation'] == 'm1'){echo('selected');} ?>">
        <section id="master-1-presentation-section">
        </section>

        <section id="master-1-programme-section">
            <div class="row header">
                <h2>Programme</h2>
                <h3>Développement</h3>
            </div>
            <div class="programme-container">
                <div class="row programme-content ">
                    <div class="losanges-container col-12 col-md-6">
                        <div class="losange-origine">
                            <div class="losange active">
                                <i class="fa fa-code"></i>
                                <h4>Développement</h4>
                            </div>
                            <div class="losange no-hover">
                            </div>
                            <div class="losange">
                                <i class="fa fa-plus"></i>
                                <h4>Autres</h4>
                            </div>
                            <div class="losange">
                                <i class="fa fa-tasks"></i>
                                <h4> Gestion de projet</h4>
                            </div>
                        </div>
                    </div>

                    <!-- ACCORDEON DEVELOPPEMENT -->
                    <div class="accordeon-container col-md-6">
                        <div class="accordeon">
                            <h4 class="accordeon-title">Ergonomie des interfaces<i class="fa"></i></h4>
                            <div class="accordeon-content">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis</p>
                                <p>Volume horaire : 8 heures CM - 4 heures TP</p>
                            </div>
                            <h4 class="accordeon-title">Image de synthèse<i class="fa"></i></h4>
                            <div class="accordeon-content">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis</p>
                                <p>Volume horaire : 8 heures CM - 4 heures TP</p>
                            </div>
                            <h4 class="accordeon-title">Réalité virtuelle et augmentée<i class="fa"></i></h4>
                            <div class="accordeon-content">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis</p>
                                <p>Volume horaire : 8 heures CM - 4 heures TP</p>
                            </div>
                            <h4 class="accordeon-title">Atelier Professionnel<i class="fa"></i></h4>
                            <div class="accordeon-content">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis</p>
                                <p>Volume horaire : 8 heures CM - 4 heures TP</p>
                            </div>
                        </div>
                    <!-- END  ACCORDEON DEVELOPPEMENT-->

                    <!-- ACCORDEON GESTION DE PROJETS-->
                        <div class="accordeon">
                            <h4 class="accordeon-title">Gestion de projet - UE 1<i class="fa"></i></h4>
                            <div class="accordeon-content">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis</p>
                                <p>Volume horaire : 8 heures CM - 4 heures TP</p>
                            </div>
                            <h4 class="accordeon-title">Gestion de projet - UE 2<i class="fa"></i></h4>
                            <div class="accordeon-content">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis</p>
                                <p>Volume horaire : 8 heures CM - 4 heures TP</p>
                            </div>
                            <h4 class="accordeon-title">Gestion de projet - UE 3<i class="fa"></i></h4>
                            <div class="accordeon-content">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis</p>
                                <p>Volume horaire : 8 heures CM - 4 heures TP</p>
                            </div>
                            <h4 class="accordeon-title">Gestion de projet - UE 4<i class="fa"></i></h4>
                            <div class="accordeon-content">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis</p>
                                <p>Volume horaire : 8 heures CM - 4 heures TP</p>
                            </div>
                        </div>
                    <!-- END  ACCORDEON GESTION DE PROJETS-->

                    <!-- ACCORDEON AUTRES-->
                    <div class="accordeon">
                        <h4 class="accordeon-title">Autres - UE 1<i class="fa"></i></h4>
                        <div class="accordeon-content">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis</p>
                            <p>Volume horaire : 8 heures CM - 4 heures TP</p>
                        </div>
                        <h4 class="accordeon-title">Autres - UE 2<i class="fa"></i></h4>
                        <div class="accordeon-content">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis</p>
                            <p>Volume horaire : 8 heures CM - 4 heures TP</p>
                        </div>
                        <h4 class="accordeon-title">Autres - UE 3<i class="fa"></i></h4>
                        <div class="accordeon-content">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis</p>
                            <p>Volume horaire : 8 heures CM - 4 heures TP</p>
                        </div>
                        <h4 class="accordeon-title">Autres - UE 4<i class="fa"></i></h4>
                        <div class="accordeon-content">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis</p>
                            <p>Volume horaire : 8 heures CM - 4 heures TP</p>
                        </div>
                    </div>
                </div>
                <!-- END  ACCORDEON AUTRES-->
                </div>
            </div>
        </section>
    </div>

    <div id="master-2" class="<?php if (isset($_GET['formation']) and $_GET['formation'] == 'm2'){echo('selected');} ?>">
        <section id="master-2-presentation-section">
            <p>Choosed master 2</p>
        </section>
    </div>

</div>




--><?php include ('includes/footer.php'); ?>

