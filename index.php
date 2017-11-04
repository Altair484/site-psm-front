<?php include_once ('includes/header.php'); ?>
<div class="container-fuild">
    <section id="welcome-section">
        <div class="filter"></div>
        <div class="row">
            <div id="welcome-left-collumn" class="col-12 col-md-7 d-flex align-content-center flex-wrap">
                <div id="logo-welcome" class="col-7 offset-1 no-padding hidden-md-down">
                    <?php include('img/svg/psm-logo.svg'); ?>
                </div>
                <div id="svg-slider-texte" class="col-12 col-sm-10 offset-sm-1 no-padding">
                    <div id="text-slider-container">
                        <div id="text-slider-idee" class="col-12 no-padding text-slider">
                            <h3>Berceau d’idées innovantes</h3>
                            <p>Les plus grandes innovations naissent d'idées simples. Les étudiants de PSM sont encouragés à
                                cultiver leur créativité et leur imagination, à voir le monde avec un regard novateur et à
                                concevoir des produits et services multimédia répondant aux besoins et aux demandes d’aujourd’hui
                                et de demain.</p>
                        </div>
                        <div id="text-slider-reunion" class="col-12 no-padding text-slider">
                            <h3>Des compétences de leader</h3>
                            <p>
                                L’expérience prépare mieux que la théorie aux défis du monde actuel. Chez PSM, nous formons
                                des chefs de projet complets et polyvalents en confrontant nos étudiants à des expériences
                                concrètes. À la sortie, ils seront capables de concevoir, réaliser et promouvoir des projets
                                multimédia complexes et innovants.</p>
                        </div>
                        <div id="text-slider-travail" class="col-12 no-padding text-slider">
                            <h3>Partager, valoriser, réussir</h3>
                            <p>Savoir composer, gérer et travailler dans une équipe de professionnels aux profils différents
                                est une compétence fondamentale dans le secteur du multimédia. En étant confrontés à de
                                nombreux projets collectifs, les étudiants de PSM apprennent à valoriser les compétences
                                spécifiques de chaque membre d’une équipe, à partager et à communiquer pour mieux réussir.</p>
                        </div>
                        <div id="text-slider-deploiement" class="col-12 no-padding text-slider">
                            <h3>La qualité avant tout</h3>
                            <p>Un produit ou un service de qualité est un produit qui sait répondre aux besoins et aux
                                attentes de ses cibles. Pour cette raison, PSM tient particulièrement à cœur d’enseigner
                                aux professionnels du multimédia de demain à bien observer et analyser le marché, à concevoir
                                et à réaliser des produits et des services visant à proposer la meilleure expérience
                                utilisateur possible.
                            </p>
                        </div>
                    </div>
                </div>

                <ul id="svg-slider-nav" class="col-10 offset-1 d-flex no-padding justify-content-between align-items-center">
                    <li><i id="prev" class="inactive fa fa-backward"></i></li>
                    <li><i id="sel_idee" class="selected fa fa-circle"></i></li>
                    <li><i id="sel_reunion" class="fa fa-circle"></i></li>
                    <li><i id="sel_travail" class="fa fa-circle"></i></li>
                    <li><i id="sel_deploiement" class="fa fa-circle"></i></li>
                    <li><i id="next" class="fa fa-forward"></i></li>
                </ul>
            </div>
            <div id="welcome-right-collumn" class="col-12 col-md-5">
                <div id="animations_home">
                    <div class="col-8 offset-2 col-md-12 offset-md-0  svg-container d-flex align-items-center" id="idee">
                        <?php include('img/svg/idee.svg'); ?>
                    </div>
                    <div class="col-8 offset-4 col-md-12 offset-md-0  svg-container d-flex align-items-center" id="reunion">
                        <?php include('img/svg/reunion.svg'); ?>
                    </div>
                    <div class="col-8 offset-4 col-md-12 offset-md-0  svg-container d-flex align-items-center" id="travail">
                        <?php include('img/svg/travail.svg'); ?>
                    </div>
                    <div class="col-8 offset-4 col-md-12 offset-md-0  svg-container d-flex align-items-center" id="deploiement">
                        <?php include('img/svg/deploiement.svg'); ?>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="presentation-section">
        <div class="row justify-content-center align-items-center">
            <div class="losange"></div>
            <div class="losange"></div>
            <div class="losange"></div>
            <div class="losange"></div>
            <div id="presentation-content" class="offset-0 offset-md-2 col-12 col-md-9">
                <div class="row">
                    <div id="presentation-picture" class="col-12 col-md-3">
                        <img src="http://via.placeholder.com/960x540" alt="">
                    </div>
                    <div id="presentation-text" class="col-12 col-md-9 d-flex justify-content-center align-items-start flex-column">
                        <h2>Passionnés et Super Motivés !</h2>
                        <p>Chez PSM, votre passion sera la clé de votre réussite. Que vous ayez un profil de graphiste, communicant, développeur,
                            informaticien, ou que vous soyez tout simplement motivé et passionné par l’innovation, le multimédia et les nouvelles
                            technologies, nous allons vous transmettre les outils et les expériences nécessaires à faire de vous un professionnel
                            qualifié dans votre domaine de prédilection.
                            Vous visez l’excellence pour la poursuite de vos études en BAC+3 ou en master ? PSM pourrait être la réponse : venez
                            découvrir nos formations et nos modalités d’admission.
                        </p>
                        <a class="btn btn-psm" href="#">ADMISSION</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="formations-section">
        <div class="row formations">
            <a href="index.php" class="formation">
                <div class="filter"></div>
                <h2>L<span class="writing-letter">ICENCE</span>3</h2>
            </a>

            <a href="index.php" class="formation">
                    <div class="filter"></div>
                    <h2 class="formation-title">M<span class="writing-letter">ASTER</span>1</h2>
            </a>

            <a href="index.php" class="formation">
                <div class="filter"></div>
                <h2 class="formation-title">M<span class="writing-letter">ASTER</span>2</h2>
            </a>
        </div>
    </section>
    <section id="qsd-section" style="height:800px">
    </section>

</div>



<?php include_once ('includes/footer.php'); ?>






