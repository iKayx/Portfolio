@Code
    ViewBag.Title = "ToDo's"
    Layout = "~/Views/Shared/_Layout.vbhtml"
End Code
<div class="container">
    <section>
        <div class="row">
            <div class="col-xs-6 col-lg-3 flex-center">
                <div class="view overlay hm-white-slight">
                    <img src="~/Content/Images/things-to-do-list.jpg" class="img-fluid" alt="" />
                    <a href="#General">
                        <div class="mask"></div>
                    </a>
                </div>
            </div>

            <div class="col-xs-6 col-lg-3 flex-center">
                <div class="view overlay hm-white-slight">
                    <img src="~/Content/Images/Legion.jpg" class="img-fluid" alt="" />
                    <a href="#WorldOfWarcraft">
                        <div class="mask"></div>
                    </a>
                </div>
            </div>

            <div class="col-xs-6 col-lg-3 flex-center">
                <div class="view overlay hm-white-slight">
                    <img src="~/Content/Images/d3.jpg" class="img-fluid" alt="" />
                    <a href="#Diablo">
                        <div class="mask"></div>
                    </a>
                </div>
            </div>

            <div class="col-xs-6 col-lg-3 flex-center">
                <div class="view overlay hm-white-slight">
                    <img src="~/Content/Images/HS.jpg" class="img-fluid" alt="" />
                    <a href="#HS">
                        <div class="mask"></div>
                    </a>
                </div>
            </div>

        </div>
    </section>

    <section id="General" class="wow fadeIn" data-wow-duration="1.5s">
        <div class="row">
            <div class="col-xs-12">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" href="#Tab1_1" role="tab" data-toggle="tab">General</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Tab1_2" role="tab" data-toggle="tab">Money</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Tab1_3" role="tab" data-toggle="tab">Work</a>
                    </li>
                </ul>

                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane fade in active" id="Tab1_1">
                        <ul>
                            <li><i class="fa fa-circle" aria-hidden="true"></i> Irgendwas</li>
                            <li><i class="fa fa-circle" aria-hidden="true"></i> Irgendwas</li>
                            <li><i class="fa fa-circle" aria-hidden="true"></i> Irgendwas</li>
                        </ul>
                    </div>
                    <div role="tabpanel" class="tab-pane fade" id="Tab1_2">

                    </div>
                    <div role="tabpanel" class="tab-pane fade" id="Tab1_3">

                    </div>
                </div>
            </div>

        </div>
    </section>

    <section id="WorldOfWarcraft" class="wow fadeIn" data-wow-duration="1.5s">
        <div class="row">
            <div class="col-xs-12">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" href="#Tab2_1" role="tab" data-toggle="tab">General</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Tab2_2" role="tab" data-toggle="tab">Priest</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Tab2_3" role="tab" data-toggle="tab">Shaman</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Tab2_4" role="tab" data-toggle="tab">Rogue</a>
                    </li>
                </ul>

                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane fade in active" id="Tab2_1">
                        <div class="card card-block" data-toggle="collapse" href="#Tab1_1_1" aria-expanded="false" aria-controls="Tab1_1_1">
                            <i class="fa fa-plus-square" aria-hidden="true" style="float:right;"></i>
                            <h4 class="card-title">Mounts</h4>
                            <div class="card-text collapse" id="Tab1_1_1">

                            </div>
                        </div>

                        <div class="card card-block" data-toggle="collapse" href="#Tab1_1_2" aria-expanded="false" aria-controls="Tab1_1_2">
                            <h4 class="card-title">Transmogs</h4>
                            <div class="card-text collapse" id="Tab1_1_2">

                            </div>
                        </div>

                        <div class="card card-block" data-toggle="collapse" href="#Tab1_1_3" aria-expanded="false" aria-controls="Tab1_1_3">
                            <h4 class="card-title">Gold stuff</h4>
                            <div class="card-text collapse" id="Tab1_1_3">

                            </div>
                        </div>
                    </div>

                    <div role="tabpanel" class="tab-pane fade" id="Tab2_2">

                    </div>

                    <div role="tabpanel" class="tab-pane fade" id="Tab2_3">

                    </div>

                    <div role="tabpanel" class="tab-pane fade" id="Tab2_4">

                    </div>
                </div>
            </div>

        </div>
    </section>

    <section id="Diablo" class="wow fadeIn" data-wow-duration="1.5s">
        <div class="row">
            <div class="col-xs-12 col-md-10 col-md-offset-1">
                <h2>test</h2>
            </div>

        </div>
    </section>

    <section id="HS" class="wow fadeIn" data-wow-duration="1.5s">
        <div class="row">
            <div class="col-xs-12 col-md-10 col-md-offset-1">
                <h2>test</h2>
            </div>

        </div>
    </section>
</div>


