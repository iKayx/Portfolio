@Code
    Layout = "~/Views/Shared/_Layout.vbhtml"
End Code

<div class="row">
    <div class="col-md-12">
        <div id="carousel" class="carousel slide carousel-fade" data-ride="carousel">

            <ol class="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" class="active"></li>
                <li data-target="#carousel" data-slide-to="1"></li>
                <li data-target="#carousel" data-slide-to="2"></li>
            </ol>

            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <img src="~/Content/Images/photo-1435244837924-21c508f9db25.jpg" alt="First slide" />
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
    </div>
</div>

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
                    <a href="#">
                        <div class="mask"></div>
                    </a>
                </div>

                <div class="card-block">
                    <h4 class="card-title">Card title</h4>
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
                    <a href="#">
                        <div class="mask"></div>
                    </a>
                </div>

                <div class="card-block">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="facebook"><i class="fa fa-facebook-official fa-2x"></i></a>
                    <a href="#" class="web"><i class="fa fa-globe fa-2x"></i></a>
                </div>
            </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-lg-3">
            <div class="card">
                <div class="view overlay hm-white-slight">
                    <img src="http://mdbootstrap.com/images/reg/reg%20(2).jpg" class="img-fluid" alt="">
                    <a href="#">
                        <div class="mask"></div>
                    </a>
                </div>

                <div class="card-block">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="steam"><i class="fa fa-steam-square fa-2x"></i></a>
                </div>
            </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-lg-3">
            <div class="card">
                <div class="view overlay hm-white-slight">
                    <img src="http://mdbootstrap.com/images/reg/reg%20(2).jpg" class="img-fluid" alt="">
                    <a href="#">
                        <div class="mask"></div>
                    </a>
                </div>

                <div class="card-block">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="row">

    </div>
</div>