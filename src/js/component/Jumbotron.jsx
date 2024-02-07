import React from "react";

const Jumbotron = () => {
    return (
        <>
            <h1 className="jumboTitle">A Warm Welcome!</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, illum dolore. Nulla sit et architecto! Culpa labore unde libero sapiente at et voluptates laborum doloribus non provident! Ipsa, doloremque quo!</p>
            <button type="button" class="btn btn-primary">Call to action!</button>

            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col">
                    <div class="card h-100">
                    <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">Last updated 3 mins ago</small>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">Last updated 3 mins ago</small>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">Last updated 3 mins ago</small>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">Last updated 3 mins ago</small>
                    </div>
                    </div>
                </div>
</div>
        </>
            
    )
    
}

export default Jumbotron;