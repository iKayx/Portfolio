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
                <img src="~/Content/Images/r6_night.jpg" alt="First slide" />
            </div>
            <div class="carousel-item">
                <img src="~/Content/Images/r6_night.jpg" alt="Second slide" />
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

            @*<div class="col-xs-12 col-sm-6 col-lg-3">
                    <div class="card">
                        <h3 class="card-header default-color white-text">Featured</h3>
                        <div class="card-block">
                            <h4 class="card-title">Special title treatment</h4>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a class="btn btn-default">Go somewhere</a>
                        </div>
                    </div>
                </div>*@

            @*https://stocksnap.io/photo/6UHHE19YG7*@

            <div class="col-xs-12 col-sm-6 col-lg-3">
                <div class="card">
                    <div class="view overlay hm-white-slight">
                        <img src="http://mdbootstrap.com/images/reg/reg%20(2).jpg" class="img-fluid" alt="">
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

            <div class="col-xs-12 col-sm-6 col-lg-3">
                <div class="card">
                    <div class="view overlay hm-white-slight">
                        <img src="http://mdbootstrap.com/images/reg/reg%20(2).jpg" class="img-fluid" alt="">
                        <div class="mask"></div>
                    </div>

                    <div class="card-block">
                        <h4 class="card-title">Gaming</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="steam"><i class="fa fa-steam-square fa-2x"></i></a>
                        <a class="d3"><img src="~/Content/Images/d3.png" /></a>
                        <a class="wow"><img src="~/Content/Images/wow.png" /></a>
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-lg-3">
                <div class="card">
                    <div class="view overlay hm-white-slight">
                        <img src="http://mdbootstrap.com/images/reg/reg%20(2).jpg" class="img-fluid" alt="">
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

            <div class="col-xs-12 col-sm-6 col-lg-3">
                <div class="card">
                    <div class="view overlay hm-white-slight">
                        <img src="http://mdbootstrap.com/images/reg/reg%20(2).jpg" class="img-fluid" alt="">
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
            <div class="col-md-7">
                <div class="view overlay hm-white-light z-depth-1-half">
                    <img src="http://mdbootstrap.com/images/proffesions/slides/socialmedia/img%20(2).jpg" class="img-fluid " alt="">
                    <div class="mask waves-effect waves-light">
                    </div>
                </div>
                <br>
            </div>

            <div class="col-md-5">
                <h2 class="h2-responsive">Hey, my name is Marvin.</h2>
                <hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis pariatur quod ipsum atque quam dolorem voluptate officia sunt placeat consectetur alias fugit cum praesentium ratione sint mollitia, perferendis natus quaerat!</p>
                <a href="" class="btn btn-primary waves-effect waves-light">Get it now!</a>
            </div>
        </div>
    </div>
</section>
