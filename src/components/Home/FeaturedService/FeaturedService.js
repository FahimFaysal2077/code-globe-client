import React from 'react';
import './FeaturedService.css';

const FeaturedService = () => {
    return (
        <section className=" pb-0 pb-md-5 my-5">
            <div class="container text-center">
                <div class="card">
                    <h3 class="mb-5">Your simple, beautiful course storefront</h3>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="text-center">
                                <div class="mt-2"> <img src="https://i.imgur.com/2tx0muB.png" width="50" height="50" /> </div>
                                <h5 class="mt-3">Learn UI content</h5> <small>Start learning eBooks, video files, audio files, PDFs, checklinst text, or just about anything.</small>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="text-center">
                                <div class="mt-2"> <img src="https://i.imgur.com/6NHM9Xy.png" width="50" height="50" /> </div>
                                <h5 class="mt-3">Beautiful landing pages</h5> <small>Sales pages that will match your brand or offer upsells to your supporters.</small>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="text-center">
                                <div class="mt-2"> <img src="https://i.imgur.com/9qaHVGj.png" width="50" height="50" /> </div>
                                <h5 class="mt-3">Connect with supporters</h5> <small>Using sales pages you can connect with your customers using our chatbot system.</small>
                            </div>
                        </div>
                    </div>
                    <div class="button mt-5"> <button class="btn btn-primary pro-button">Add a product <i class="fa fa-long-arrow-right ml-2 mt-1"></i></button> </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;