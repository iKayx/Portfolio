@Code
    ViewBag.Title = "ToDo's"
    Layout = "~/Views/Shared/_Layout.vbhtml"
End Code
<div class="row">
    <div class="col-md-6">
        <ul class="nav nav-tabs tabs-3" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#panel1" role="tab" aria-expanded="true">Popular</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#panel2" role="tab" aria-expanded="false">Recent</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#panel3" role="tab" aria-expanded="false">Random</a>
            </li>
        </ul>

        <div class="tab-content">
            <div class="tab-pane fade active in" id="panel1" role="tabpanel" aria-expanded="true">
                <br>
                <div class="horizontal-listing z-depth-1">
                    <div class="row">
                        <div class="col-xs-4">
                            <div class="view overlay hm-white-slight">
                                <img src="http://mdbootstrap.com/images/reg/reg%20(54).jpg" class="img-fluid" alt="">
                            </div>
                        </div>
                        <div class="col-xs-8">
                            <h2>Firelands</h2>
                            <input class="box" type="checkbox" name="1" />
                            <div class="card-data">
                                
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-4">
                            <div class="view overlay hm-white-slight">
                                <img src="http://mdbootstrap.com/images/reg/reg%20(55).jpg" class="img-fluid" alt="">
                                <a>
                                    <div class="mask waves-effect waves-light"></div>
                                </a>
                            </div>
                        </div>
                        <div class="col-xs-8">
                            <a><h2>Card title</h2></a>

                            <div class="card-data">
                                <ul>
                                    <li><i class="fa fa-clock-o"></i> 05/10/2015</li>
                                    <li><a><i class="fa fa-comments-o"></i>12</a></li>
                                    <li><a><i class="fa fa-facebook"> </i>21</a></li>
                                    <li><a><i class="fa fa-twitter"> </i>5</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-4">
                            <div class="view overlay hm-white-slight">
                                <img src="http://mdbootstrap.com/images/reg/reg%20(56).jpg" class="img-fluid" alt="">
                                <a>
                                    <div class="mask waves-effect waves-light"></div>
                                </a>
                            </div>
                        </div>
                        <div class="col-xs-8">
                            <a><h2>Card title</h2></a>

                            <div class="card-data">
                                <ul>
                                    <li><i class="fa fa-clock-o"></i> 05/10/2015</li>
                                    <li><a><i class="fa fa-comments-o"></i>12</a></li>
                                    <li><a><i class="fa fa-facebook"> </i>21</a></li>
                                    <li><a><i class="fa fa-twitter"> </i>5</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--Panel 2-->
            <div class="tab-pane fade" id="panel2" role="tabpanel" aria-expanded="false">
                <br>

                <!--Main wrapper-->
                <div class="horizontal-listing z-depth-1">
                    <!--First row-->
                    <div class="row">
                        <!--Image column-->
                        <div class="col-xs-4">
                            <div class="view overlay hm-white-slight">
                                <img src="http://mdbootstrap.com/images/reg/reg%20(34).jpg" class="img-fluid" alt="">
                                <a>
                                    <div class="mask waves-effect waves-light"></div>
                                </a>
                            </div>
                        </div>
                        <!--/.Image column-->
                        <!--Content column-->
                        <div class="col-xs-8">
                            <a><h2>Card title</h2></a>

                            <div class="card-data">
                                <ul>
                                    <li><i class="fa fa-clock-o"></i> 05/10/2015</li>
                                    <li><a><i class="fa fa-comments-o"></i>12</a></li>
                                    <li><a><i class="fa fa-facebook"> </i>21</a></li>
                                    <li><a><i class="fa fa-twitter"> </i>5</a></li>
                                </ul>
                            </div>
                        </div>
                        <!--/.Content column-->

                    </div>
                    <!--/.First row-->
                    <!--Second row-->
                    <div class="row">
                        <!--Image column-->
                        <div class="col-xs-4">
                            <div class="view overlay hm-white-slight">
                                <img src="http://mdbootstrap.com/images/reg/reg%20(35).jpg" class="img-fluid" alt="">
                                <a>
                                    <div class="mask waves-effect waves-light"></div>
                                </a>
                            </div>
                        </div>
                        <!--/.Image column-->
                        <!--Content column-->
                        <div class="col-xs-8">
                            <a><h2>Card title</h2></a>

                            <div class="card-data">
                                <ul>
                                    <li><i class="fa fa-clock-o"></i> 05/10/2015</li>
                                    <li><a><i class="fa fa-comments-o"></i>12</a></li>
                                    <li><a><i class="fa fa-facebook"> </i>21</a></li>
                                    <li><a><i class="fa fa-twitter"> </i>5</a></li>
                                </ul>
                            </div>
                        </div>
                        <!--/.Content column-->

                    </div>
                    <!--/.Second row-->
                    <!--Third row-->
                    <div class="row">
                        <!--Image column-->
                        <div class="col-xs-4">
                            <div class="view overlay hm-white-slight">
                                <img src="http://mdbootstrap.com/images/reg/reg%20(36).jpg" class="img-fluid" alt="">
                                <a>
                                    <div class="mask waves-effect waves-light"></div>
                                </a>
                            </div>
                        </div>
                        <!--/.Image column-->
                        <!--Content column-->
                        <div class="col-xs-8">
                            <a><h2>Card title</h2></a>

                            <div class="card-data">
                                <ul>
                                    <li><i class="fa fa-clock-o"></i> 05/10/2015</li>
                                    <li><a><i class="fa fa-comments-o"></i>12</a></li>
                                    <li><a><i class="fa fa-facebook"> </i>21</a></li>
                                    <li><a><i class="fa fa-twitter"> </i>5</a></li>
                                </ul>
                            </div>
                        </div>
                        <!--/.Content column-->

                    </div>
                    <!--/.Third row-->

                </div>
                <!--/.Main wrapper-->

            </div>
            <!--/.Panel 2-->
            <!--Panel 3-->
            <div class="tab-pane fade" id="panel3" role="tabpanel" aria-expanded="false">
                <br>

                <!--Main wrapper-->
                <div class="horizontal-listing z-depth-1">
                    <!--First row-->
                    <div class="row">
                        <!--Image column-->
                        <div class="col-xs-4">
                            <div class="view overlay hm-white-slight">
                                <img src="http://mdbootstrap.com/images/reg/reg%20(24).jpg" class="img-fluid" alt="">
                                <a>
                                    <div class="mask waves-effect waves-light"></div>
                                </a>
                            </div>
                        </div>
                        <!--/.Image column-->
                        <!--Content column-->
                        <div class="col-xs-8">
                            <a><h2>Card title</h2></a>

                            <div class="card-data">
                                <ul>
                                    <li><i class="fa fa-clock-o"></i> 05/10/2015</li>
                                    <li><a><i class="fa fa-comments-o"></i>12</a></li>
                                    <li><a><i class="fa fa-facebook"> </i>21</a></li>
                                    <li><a><i class="fa fa-twitter"> </i>5</a></li>
                                </ul>
                            </div>
                        </div>
                        <!--/.Content column-->

                    </div>
                    <!--/.First row-->
                    <!--Second row-->
                    <div class="row">
                        <!--Image column-->
                        <div class="col-xs-4">
                            <div class="view overlay hm-white-slight">
                                <img src="http://mdbootstrap.com/images/reg/reg%20(25).jpg" class="img-fluid" alt="">
                                <a>
                                    <div class="mask waves-effect waves-light"></div>
                                </a>
                            </div>
                        </div>
                        <!--/.Image column-->
                        <!--Content column-->
                        <div class="col-xs-8">
                            <a><h2>Card title</h2></a>

                            <div class="card-data">
                                <ul>
                                    <li><i class="fa fa-clock-o"></i> 05/10/2015</li>
                                    <li><a><i class="fa fa-comments-o"></i>12</a></li>
                                    <li><a><i class="fa fa-facebook"> </i>21</a></li>
                                    <li><a><i class="fa fa-twitter"> </i>5</a></li>
                                </ul>
                            </div>
                        </div>
                        <!--/.Content column-->

                    </div>
                    <!--/.Second row-->
                    <!--Third row-->
                    <div class="row">
                        <!--Image column-->
                        <div class="col-xs-4">
                            <div class="view overlay hm-white-slight">
                                <img src="http://mdbootstrap.com/images/reg/reg%20(26).jpg" class="img-fluid" alt="">
                                <a>
                                    <div class="mask waves-effect waves-light"></div>
                                </a>
                            </div>
                        </div>
                        <!--/.Image column-->
                        <!--Content column-->
                        <div class="col-xs-8">
                            <a><h2>Card title</h2></a>

                            <div class="card-data">
                                <ul>
                                    <li><i class="fa fa-clock-o"></i> 05/10/2015</li>
                                    <li><a><i class="fa fa-comments-o"></i>12</a></li>
                                    <li><a><i class="fa fa-facebook"> </i>21</a></li>
                                    <li><a><i class="fa fa-twitter"> </i>5</a></li>
                                </ul>
                            </div>
                        </div>
                        <!--/.Content column-->

                    </div>
                    <!--/.Third row-->

                </div>
                <!--/.Main wrapper-->

            </div>
            <!--/.Panel 3-->
        </div>
    </div>
</div>