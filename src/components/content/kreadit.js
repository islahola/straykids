import React from 'react';

const Kreadit = (props) => {
  let idH2 = `haeding-${props.id}`
  let div =`div-${props.id}`
  let target = `#${div}`
  return (    
    <div class="accordion-item">
    <h2 class="accordion-header" id={idH2}>
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={target} aria-expanded="false" aria-controls={div}>
       {props.name}
      </button>
    </h2>
    <div id={div} class="accordion-collapse collapse container-kredit" aria-labelledby={idH2} data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <li>lirik : Bang Chan (3Racha) Changbin(3Racha) Han(3Racha)</li>
        <li>Composer : Bang Chan Changbin Han Raphael (Producing Lab)Daviid (3scape)Yosia (3scape)</li>
        <li>lirik : Raphael Daviid Yosia Bang Chan(3Racha)</li>
      </div>
    </div>
  </div> 
  );
}

export default Kreadit;
