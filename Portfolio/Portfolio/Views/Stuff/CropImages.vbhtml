@Code
    ViewBag.Title = "Image Cropper"
    Layout = "~/Views/Shared/_Layout.vbhtml"
End Code

<div class="container-fluid" style="flex:1;">
    <div class="row" id="actions">
        <div class="col-xs-12 col-md-8 col-lg-9">
            <div class="img-container">
                <img id="UploadImage" src="~/Content/Images/Upload.svg" alt="Picture" />
            </div>
        </div>

        <div class="docs-buttons">
            <div class="col-xs-12 col-md-4 col-lg-3">
                <br />
                <div class="btn-group">
                    <button type="button" class="btn btn-primary" data-method="setDragMode" data-option="move" title="Move">
                        <span class="fa fa-arrows"></span>
                    </button>

                    <button type="button" class="btn btn-primary" data-method="setDragMode" data-option="crop" title="Crop">
                        <span class="fa fa-crop"></span>
                    </button>

                    <button type="button" class="btn btn-primary" data-method="zoom" data-option="0.1" title="Zoom In">
                        <span class="fa fa-search-plus"></span>
                    </button>

                    <button type="button" class="btn btn-primary" data-method="zoom" data-option="-0.1" title="Zoom Out">
                        <span class="fa fa-search-minus"></span>
                    </button>
                </div>                
                <hr />
            </div>

            <div class="col-xs-12 col-md-4 col-lg-3">
                <div class="btn-group">
                    <button type="button" class="btn btn-primary" data-method="move" data-option="-10" data-second-option="0" title="Move Left">
                        <span class="fa fa-arrow-left"></span>
                    </button>
                    <button type="button" class="btn btn-primary" data-method="move" data-option="10" data-second-option="0" title="Move Right">
                        <span class="fa fa-arrow-right"></span>
                    </button>
                    <button type="button" class="btn btn-primary" data-method="move" data-option="0" data-second-option="-10" title="Move Up">
                        <span class="fa fa-arrow-up"></span>
                    </button>
                    <button type="button" class="btn btn-primary" data-method="move" data-option="0" data-second-option="10" title="Move Down">
                        <span class="fa fa-arrow-down"></span>
                    </button>
                </div>
                <hr />
            </div>

            <div class="col-xs-12 col-md-4 col-lg-3">
                <div class="btn-group">
                    <button type="button" class="btn btn-primary" data-method="rotate" data-option="-45" title="Rotate Left">
                        <span class="fa fa-rotate-left"></span>
                    </button>

                    <button type="button" class="btn btn-primary" data-method="rotate" data-option="45" title="Rotate Right">
                        <span class="fa fa-rotate-right"></span>
                    </button>

                    <button type="button" class="btn btn-primary" data-method="reset" title="Reset">
                        <span class="fa fa-refresh"></span>
                    </button>
                </div>
                <hr />
            </div>

            <div class="col-xs-12 col-md-4 col-lg-3">
                <div class="btn-group btn-group-crop">
                    <button type="button" class="btn btn-primary" data-method="getCroppedCanvas">
                        <span class="docs-tooltip" data-toggle="tooltip" title="cropper.getCroppedCanvas()">Get Cropped Canvas</span>
                    </button>
                </div>
                <div class="modal fade docs-cropped" id="getCroppedCanvasModal" role="dialog" aria-hidden="true" aria-labelledby="getCroppedCanvasTitle" tabindex="-1">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                <h4 class="modal-title" id="getCroppedCanvasTitle">Cropped Image</h4>
                            </div>
                            <div class="modal-body"></div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                <a class="btn btn-primary" id="download" href="javascript:void(0);" download="cropped.jpg">Download</a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>

            <div class="col-xs-12 col-md-4 col-lg-3">
                <div class="btn-group">
                    <label class="btn btn-primary btn-upload" for="inputImage" title="Upload image file">
                        <input type="file" class="sr-only" id="inputImage" name="file" accept="image/*">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="Import image with Blob URLs">
                            <span class="fa fa-upload"></span>
                        </span>
                    </label>
                    <button type="button" class="btn btn-primary" data-method="destroy" title="Destroy">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;destroy&quot;)">
                            <span class="fa fa-power-off"></span>
                        </span>
                    </button>
                </div>
                <hr />
            </div>

            <div class="col-xs-12 col-md-4 col-lg-3 docs-toggles">
                <div class="btn-group btn-group-justified" data-toggle="buttons">
                    <label class="btn btn-primary active">
                        <input type="radio" class="sr-only" id="aspectRatio0" name="aspectRatio" value="1.7777777777777777">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="aspectRatio: 16 / 9">16:9</span>
                    </label>

                    <label class="btn btn-primary">
                        <input type="radio" class="sr-only" id="aspectRatio1" name="aspectRatio" value="1.3333333333333333">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="aspectRatio: 4 / 3">4:3</span>
                    </label>
                    <label class="btn btn-primary">
                        <input type="radio" class="sr-only" id="aspectRatio2" name="aspectRatio" value="1">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="aspectRatio: 1 / 1">1:1</span>
                    </label>
                    <label class="btn btn-primary">
                        <input type="radio" class="sr-only" id="aspectRatio4" name="aspectRatio" value="NaN">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="aspectRatio: NaN">Free</span>
                    </label>
                </div>
                <hr>
            </div>
        </div>
    </div>
</div>
@*<div class="container-fluid" style="flex:1;">
        <div class="row">
            <img id="Cropper" src="http://placehold.it/1000x1000" style="max-width:100%;max-height:500px;" class="col-xs-10" />

            <div class="col-xs-2">
                <br />
                <div class="btn-group">
                    <button type="button" class="btn btn-primary" data-method="setDragMode" data-option="move" title="Move">
                        <span class="fa fa-arrows"></span>
                    </button>

                    <button type="button" class="btn btn-primary" data-method="setDragMode" data-option="crop" title="Crop">
                        <span class="fa fa-crop"></span>
                    </button>

                    <button type="button" class="btn btn-primary" data-method="zoom" data-option="0.1" title="Zoom In">
                        <span class="fa fa-search-plus"></span>
                    </button>

                    <button type="button" class="btn btn-primary" data-method="zoom" data-option="-0.1" title="Zoom Out">
                        <span class="fa fa-search-minus"></span>
                    </button>
                </div>
                <hr />
            </div>

            <div class="col-xs-2">
                <div class="btn-group">
                    <button type="button" class="btn btn-primary" data-method="rotate" data-option="-45" title="Rotate Left">
                        <span class="fa fa-rotate-left"></span>
                    </button>

                    <button type="button" class="btn btn-primary" data-method="rotate" data-option="45" title="Rotate Right">
                        <span class="fa fa-rotate-right"></span>
                    </button>

                    <button type="button" class="btn btn-primary" data-method="reset" title="Reset">
                        <span class="fa fa-refresh"></span>
                    </button>
                </div>
                <hr />
            </div>

            <div class="col-xs-2">
                <div class="btn-group">
                    <button type="button" class="btn btn-primary" data-method="getCroppedCanvas">Get Cropped Canvas</button>
                </div>
                <hr />
            </div>

            <div class="col-xs-2">
                <div class="btn-group">
                    <label class="btn btn-primary btn-upload" for="inputImage" title="Upload image file">
                        <input type="file" class="sr-only" id="inputImage" name="file" accept="image/*">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="Import image with Blob URLs">
                            <span class="fa fa-upload"></span>
                        </span>
                    </label>
                    <button type="button" class="btn btn-primary" data-method="destroy" title="Destroy">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;destroy&quot;)">
                            <span class="fa fa-power-off"></span>
                        </span>
                    </button>
                </div>
                <hr />
            </div>

            <div class="col-xs-3">
                <div class="btn-group btn-group-justified" data-toggle="buttons">
                    <label class="btn btn-primary active">
                        <input type="radio" class="sr-only" id="aspectRatio0" name="aspectRatio" value="1.7777777777777777">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="aspectRatio: 16 / 9">16:9</span>
                    </label>

                    <label class="btn btn-primary">
                        <input type="radio" class="sr-only" id="aspectRatio1" name="aspectRatio" value="1.3333333333333333">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="aspectRatio: 4 / 3">4:3</span>
                    </label>
                    <label class="btn btn-primary">
                        <input type="radio" class="sr-only" id="aspectRatio2" name="aspectRatio" value="1">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="aspectRatio: 1 / 1">1:1</span>
                    </label>
                    <label class="btn btn-primary">
                        <input type="radio" class="sr-only" id="aspectRatio4" name="aspectRatio" value="NaN">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="aspectRatio: NaN">Free</span>
                    </label>
                </div>
            </div>
        </div>
    </div>*@

