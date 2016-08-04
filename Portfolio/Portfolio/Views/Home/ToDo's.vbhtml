@Code
    ViewBag.Title = "ToDo's"
    Layout = "~/Views/Shared/_Layout.vbhtml"
End Code
<section>
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
                                    <img src="http://mdbootstrap.com/images/reg/reg%20(55).jpg" class="img-fluid" alt="">
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
</section>

<section>
    <div class="row">
        <div class="col-md-6">
            <!-- Nav tabs --><div class="card">
                <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>
                    <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
                    <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>
                    <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane active" id="home">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    <div role="tabpanel" class="tab-pane" id="profile">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                    <div role="tabpanel" class="tab-pane" id="messages">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    <div role="tabpanel" class="tab-pane" id="settings">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage..</div>
                </div>
            </div>
        </div>
    </div>
</section>
