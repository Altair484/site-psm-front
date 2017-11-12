<?php include_once ('includes/header.php'); ?>
<!-- Welcome section start -->
<section id="welcome-section">
    <div class="filter"></div>
    <div class="row">
        <div id="welcome-left-collumn" class="col-12 col-md-7 d-flex align-content-center flex-wrap">
            <div id="logo-welcome" class="col-7 offset-1 no-padding hidden-md-down">
                <img src="img/svg/psm-logo.svg" alt="Logo de la seciton accueil du site PSM">
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
                    <?php echo file_get_contents('img/svg/idee.svg'); ?>
                </div>
                <div class="col-8 offset-4 col-md-12 offset-md-0  svg-container d-flex align-items-center" id="reunion">
                    <?php  echo file_get_contents('img/svg/reunion.svg'); ?>
                </div>
                <div class="col-8 offset-4 col-md-12 offset-md-0  svg-container d-flex align-items-center" id="travail">
                    <?php echo file_get_contents('img/svg/travail.svg'); ?>
                </div>
                <div class="col-8 offset-4 col-md-12 offset-md-0  svg-container d-flex align-items-center" id="deploiement">
                    <?php echo file_get_contents('img/svg/deploiement.svg'); ?>
                </div>
            </div>
        </div>
    </div>
    <div class="mouse">
        <div class="scroll"></div>
    </div>
    <div class="swipe-container">
        <?php echo file_get_contents('img/svg/swipe.svg'); ?>
    </div>
</section>
<!-- Welcome section end -->

<!-- Presentation section start -->
<section id="presentation-section">
    <div class="row justify-content-center align-items-center">
        <div class="losange"></div>
        <div class="losange"></div>
        <div class="losange"></div>
        <div class="losange"></div>
        <div id="presentation-content" class="offset-0 offset-md-2 col-12 col-md-9">
            <div class="row">
                <div id="presentation-picture" class="col-12 col-md-3 no-padding">
                    <?php echo file_get_contents('img/svg/anac1.svg'); ?>
                </div>
                <div id="presentation-text" class="col-12 col-md-9 d-flex justify-content-center align-items-start flex-column">
                    <h2>Passionnés et Super Motivés !</h2>
                    <p>Chez PSM, votre <b>passion</b> sera la clé de votre réussite. Que vous ayez un profil de graphiste, communicant,
                        développeur, informaticien, ou que vous soyez tout simplement <b>motivé</b> et passionné par <b>l’innovation</b>, le
                        multimédia et les nouvelles technologies, nous allons vous transmettre les <b>outils</b>et les <b>expériences</b>
                        nécessaires à faire de vous un professionnel qualifié dans votre domaine de prédilection.
                        Vous visez <b>l’excellence</b> pour la poursuite de vos études en <b>BAC+3</b> ou en <b>Master</b> ? PSM pourrait être la
                        réponse : venez découvrir nos <a href="#">formations</a> et nos <a href="">modalités d’admission</a>.
                    </p>
                    <a class="btn btn-psm" href="#">ADMISSION</a>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Presentation section end -->

<!-- Formation section start -->
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
<!-- Formation section end -->

<!-- Projects section start -->
<section id="projects-section">
    <div class="row justify-content-center align-items-center">
        <div class="losange"></div>
        <div class="losange"></div>
        <div class="losange"></div>
        <div class="losange"></div>
        <div id="projects-content" class="col-12 col-md-9">
            <div class="row">
                <div id="projects-text" class="col-12 col-md-9 d-flex justify-content-center align-items-start flex-column">
                    <h2>Des formations orientées projet</h2>
                    <p>Les <b>projets multimédia</b> sont le pain quotidien des étudiants de PSM. Chaque année, ils sont amenés à
                        réaliser un vrai projet d’<b>équipe</b>, en totale autonomie et dans des <b>conditions réelles</b> (et cela, en
                        plus des projets spécifiques aux unités d’enseignements).<br />
                        Ces <b>expériences concrètes</b>, en plus d’être extrêmement formatrices et valorisantes, aboutissent souvent
                        à des résultats remarquables.<br />
                        Découvrez les projets réalisés au fil des années par nos étudiant dans la section dédiée de ce site !

                    </p>
                    <div class="btns-box">
                        <a class="btn btn-psm" href="#">PROJETS RHIZOME</a>
                        <a class="btn btn-psm" href="#">PROJETS FIN D'ÉTUDES</a>
                    </div>
                </div>
                <div id="projects-picture" class="col-12 col-md-3">
                    <img src="http://via.placeholder.com/960x540" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-2"></div>
    </div>
</section>
<!-- Projects section end -->

<!-- News section start -->
<section id="news-section">
    <div class="row justify-content-around">
        <div class="news col-12 col-sm-6 col-xl-4 no-padding">
            <div class="thumbnail">
                <figure>
                    <a href="">
                        <img src="http://via.placeholder.com/960x540" alt="">
                    </a>
                </figure>
                <span class="line"></span>
            </div>
            <div class="text-news-container col-12">
                <h3>Actualité 1</h3>
                <p class="date">9 octobre 2017</p>
                <p class="excerpt">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad... </p>
            </div>
        </div>
        <div class="news col-12 col-sm-6 col-xl-4 no-padding">
            <div class="thumbnail">
                <figure>
                    <a href="">
                        <img src="http://via.placeholder.com/960x540" alt="">
                    </a>
                </figure>
                <span class="line"></span>
            </div>
            <div class="text-news-container col-12">
                <h3>Actualité 1</h3>
                <p class="date">9 octobre 2017</p>
                <p class="excerpt">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad... </p>
            </div>
        </div>
        <div class="news col-12 col-sm-6 col-xl-4 no-padding">
            <div class="thumbnail">
                <figure>
                    <a href="">
                        <img src="http://via.placeholder.com/960x540" alt="">
                    </a>
                </figure>
                <span class="line"></span>
            </div>
            <div class="text-news-container col-12">
                <h3>Actualité 1</h3>
                <p class="date">9 octobre 2017</p>
                <p class="excerpt">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad... </p>
            </div>
        </div>
        <div class="row w-100">
            <div class="see-all-news  d-flex justify-content-center align-items-center col-12">
                <a href="#" class="btn btn-psm">Voir toutes les actualités</a>
            </div>
        </div>
    </div>
</section>
<!-- News section end -->

<!-- Professional section start -->
<section id="professional-section">
    <div class="row justify-content-center align-items-center">
        <div class="losange"></div>
        <div class="losange"></div>
        <div class="losange"></div>
        <div class="losange"></div>
        <div id="professional-content" class="offset-0 offset-md-2 col-12 col-md-9">
            <div class="row">
                <div id="professional-picture" class="col-12 col-md-3">
                    <img src="http://via.placeholder.com/960x540" alt="">
                </div>
                <div id="professional-text" class="col-12 col-md-9 d-flex justify-content-center align-items-start flex-column">
                    <h2>Un tremplin vers le monde du travail</h2>
                    <p>La force de PSM est la <b>réussite</b> de ses étudiants dans le monde du travail. Pour atteindre ce but,
                        nous misons sur la <b>qualité</b> des enseignements, sur la <b>polyvalence</b> des compétences des étudiants et
                        sur des <b>expériences professionnelles</b> réellement valorisantes pour leurs profils.<br />
                        Les stages de Licence 3 et de Master 2 visent à favoriser l’insertion professionnelle et le <b>recrutement</b>
                        immédiat de nos diplômés.<br />
                        Vous êtes un professionnel et vous souhaitez soumettre une offre de stage / emploi à nos étudiants ?
                        Un formulaire est disponible pour vous dans la section <a href="#">Espace Pro</a>.
                    </p>
                    <a class="btn btn-psm" href="#">Espace pro</a>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Professional section end -->
<?php include_once ('includes/footer.php'); ?>






