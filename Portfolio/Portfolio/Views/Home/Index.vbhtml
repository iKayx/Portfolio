@Code
    Layout = "~/Views/Shared/_Layout.vbhtml"
End Code

<section id="Banner">
    <div id="carousel" class="carousel slide carousel-fade" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carousel" data-slide-to="0" class="active"></li>
            <li data-target="#carousel" data-slide-to="1"></li>
            <li data-target="#carousel" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
                <img src="~/Content/Images/Banner1.jpg" alt="First slide" />
            </div>
            <div class="carousel-item">
                <img src="~/Content/Images/Banner2.jpg" alt="Second slide" />
            </div>
            <div class="carousel-item">
                <img src="~/Content/Images/Banner2.jpg" alt="Third slide" />
            </div>
        </div>

        <a class="left carousel-control" href="#carousel" role="button" data-slide="prev">
            <span class="icon-prev" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#carousel" role="button" data-slide="next">
            <span class="icon-next" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</section>

<section>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-lg-3 wow fadeInUp" data-wow-duration="2s">
                <div class="card">
                    <div class="view overlay hm-white-slight">
                        <img src="~/Content/Images/Portfolio.jpg" class="img-fluid" alt="" />
                        @*https://stocksnap.io/photo/F164KBFZ95*@
                        <div class="mask"></div>
                    </div>

                    <div class="card-block">
                        <h4 class="card-title">Portfolio</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="web"><i class="fa fa-globe fa-2x"></i></a>
                        <a href="#" class="web"><i class="fa fa-globe fa-2x"></i></a>
                        <a href="#" class="web"><i class="fa fa-globe fa-2x"></i></a>
                        <a href="#" class="web"><i class="fa fa-globe fa-2x"></i></a>
                        <a href="#" class="web"><i class="fa fa-globe fa-2x"></i></a>
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-lg-3 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.25s">
                <div class="card">
                    <div class="view overlay hm-white-slight">
                        <img src="~/Content/Images/Gaming.jpg" class="img-fluid" alt="" />
                        <div class="mask"></div>
                    </div>

                    <div class="card-block">
                        <h4 class="card-title">Gaming</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="steam"><i class="fa fa-steam-square fa-2x"></i></a>
                        <a class="d3"><img src="~/Content/Images/d3.png" /></a>
                        <a class="WorldofWarcraft"><img src="~/Content/Images/wow.png" /></a>
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-lg-3 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                <div class="card">
                    <div class="view overlay hm-white-slight">
                        <img src="~/Content/Images/sumounit.png" class="img-fluid" alt="" />
                        <div class="mask"></div>
                    </div>

                    <div class="card-block">
                        <h4 class="card-title">Sumounit</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="facebook"><i class="fa fa-facebook-official fa-2x"></i></a>
                        <a href="#" class="youtube"><i class="fa fa-youtube fa-2x"></i></a>
                        <a href="#" class="instagram"><i class="fa fa-instagram fa-2x"></i></a>

                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-lg-3 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.75s">
                <div class="card">
                    <div class="view overlay hm-white-slight">
                        <img src="~/Content/Images/Rush Racing.jpg" class="img-fluid" alt="" />
                        <div class="mask"></div>
                    </div>

                    <div class="card-block">
                        <h4 class="card-title">Rush Racing</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="facebook"><i class="fa fa-facebook-official fa-2x"></i></a>
                        <a href="#" class="web"><i class="fa fa-globe fa-2x"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="bg-faded">
    <div class="container">
        <div class="row">
            <div class="col-md-7 wow fadeInLeft" data-wow-duration="2s">
                <div class="view overlay hm-white-light z-depth-1-half">
                    <img src="~/Content/Images/About.jpg" class="img-fluid " alt="" />
                    <div class="mask waves-effect waves-light">
                    </div>
                </div>
                <br>
            </div>

            <div class="col-md-5 wow fadeInUp" data-wow-duration="2s">
                <h2 class="h2-responsive">Hey, my name is Marvin.</h2>
                <hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis pariatur quod ipsum atque quam dolorem voluptate officia sunt placeat consectetur alias fugit cum praesentium ratione sint mollitia, perferendis natus quaerat!</p>
                <a href="" class="btn btn-primary waves-effect waves-light">Get it now!</a>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <div class="row">
            <div class="col-md-5 wow fadeInDown" data-wow-duration="2s" data-wow-offset="250">
                <h2 class="h2-responsive">Hey, my name is Marvin.</h2>
                <hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis pariatur quod ipsum atque quam dolorem voluptate officia sunt placeat consectetur alias fugit cum praesentium ratione sint mollitia, perferendis natus quaerat!</p>
                <a href="" class="btn btn-primary waves-effect waves-light">Get it now!</a>
            </div>

            <div class="col-md-7 wow fadeInRight" data-wow-duration="2s" data-wow-offset="250">
                <div class="view overlay hm-white-light z-depth-1-half">
                    <img src="~/Content/Images/About.jpg" class="img-fluid " alt="" />
                    <div class="mask waves-effect waves-light">
                    </div>
                </div>
                <br>
            </div>
        </div>
    </div>
</section>
