export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>ProjectUi</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
<link rel="stylesheet" href="styles-5INURTSO.css"><style ng-app-id="ng">.page-title[_ngcontent-ng-c4256359353]{text-align:center;font-size:2rem;margin-bottom:20px}.section[_ngcontent-ng-c4256359353]{margin-bottom:40px}.section[_ngcontent-ng-c4256359353]   h2[_ngcontent-ng-c4256359353]{font-size:1.5rem;margin-bottom:10px;color:#333}.section[_ngcontent-ng-c4256359353]   p[_ngcontent-ng-c4256359353]{font-size:1rem;line-height:1.6}.section[_ngcontent-ng-c4256359353]   ul[_ngcontent-ng-c4256359353]{margin:15px 0;padding-left:20px}.section[_ngcontent-ng-c4256359353]   li[_ngcontent-ng-c4256359353]{margin-bottom:10px}.section[_ngcontent-ng-c4256359353]   a[_ngcontent-ng-c4256359353]{color:#007bff;text-decoration:none}.section[_ngcontent-ng-c4256359353]   a[_ngcontent-ng-c4256359353]:hover{text-decoration:underline}</style></head>
<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click","submit","input","compositionstart","compositionend","change"],["blur"]);</script>
  <app-root ng-version="19.0.1" ngh="2" ng-server-context="ssg"><header><div class="container p-4 text-center align-middle"><h3 class="fs-1 text center">Cardiovascular Disease (CVD) Risk Prediction Tool</h3></div></header><section><div class="container-fluid px-0"><div class="row g-0"><div class="col d-flex flex-column align-items-center p-4"><app-user-input class="w-100" ngh="0"><div class="container"><form novalidate class="ng-untouched ng-pristine ng-invalid" jsaction="submit:;"><div class="form-group"><label for="age">Age (years)</label><input type="number" name="age" placeholder required class="form-control form-control-sm ng-untouched ng-pristine ng-invalid" value jsaction="input:;blur:;compositionstart:;compositionend:;"></div><div class="form-group"><label for="alco">What is your sex?</label><select type="number" name="gender" required class="form-select form-select-sm ng-untouched ng-pristine ng-invalid" jsaction="change:;blur:;"><option value="1">Female</option><option value="2">Male</option><!----></select></div><div class="form-group"><label for="height">Height (cm)</label><input type="number" name="height" placeholder required class="form-control form-control-sm ng-untouched ng-pristine ng-invalid" value jsaction="input:;blur:;compositionstart:;compositionend:;"></div><div class="form-group"><label for="weight">Weight (kg)</label><input type="number" name="weight" placeholder required class="form-control form-control-sm ng-untouched ng-pristine ng-invalid" value jsaction="input:;blur:;compositionstart:;compositionend:;"></div><div class="form-group"><label for="ap_hi">Systolic Blood Pressure (mm[Hg])</label><input type="number" name="ap_hi" placeholder required class="form-control form-control-sm ng-untouched ng-pristine ng-invalid" value jsaction="input:;blur:;compositionstart:;compositionend:;"></div><div class="form-group"><label for="ap_lo">Diastolic Blood Pressure (mm[Hg])</label><input type="number" name="ap_lo" placeholder required class="form-control form-control-sm ng-untouched ng-pristine ng-invalid" value jsaction="input:;blur:;compositionstart:;compositionend:;"></div><div class="form-group"><label for="cholesterol">Cholesterol (mg/dL)</label><input type="number" name="cholesterol" placeholder required class="form-control form-control-sm ng-untouched ng-pristine ng-invalid" value jsaction="input:;blur:;compositionstart:;compositionend:;"></div><div class="form-group"><label for="gluc">Glucose (mg/dL)</label><input type="number" name="gluc" placeholder required class="form-control form-control-sm ng-untouched ng-pristine ng-invalid" value jsaction="input:;blur:;compositionstart:;compositionend:;"></div><div class="form-group"><label for="smoke">How often do you smoke?</label><select type="number" name="smoke" required class="form-select form-select-sm ng-untouched ng-pristine ng-invalid" jsaction="change:;blur:;"><option value="0">Never</option><option value="1">Sometimes</option><option value="1">Often</option><!----></select></div><div class="form-group"><label for="alco">How often do you drink alcohol?</label><select type="number" name="alco" required class="form-select form-select-sm ng-untouched ng-pristine ng-invalid" jsaction="change:;blur:;"><option value="0">Never</option><option value="1">Sometimes</option><option value="1">Often</option><!----></select></div><br><button type="submit" name="probability" value="probability" class="btn btn-outline-primary" style="margin-right: 5px;" disabled jsaction="click:;">Probability</button><button type="submit" name="classification" value="classification" class="btn btn-outline-primary" disabled jsaction="click:;">Classification</button></form></div><br><div class="container"><p hidden> </p></div></app-user-input></div><div class="col d-flex flex-column align-items-start p-4"><div class="container"><div id="nav-tab" role="tablist" class="nav nav-tabs d-flex"><a routerlink="/cvd" routerlinkactive="active" class="w-100 nav-item nav-link" style="flex: 1;" href="/cvd" jsaction="click:;"> Understanding CVD </a><a routerlink="/lr-model" routerlinkactive="active" class="w-100 nav-item nav-link" style="flex: 1;" href="/lr-model" jsaction="click:;"> Logistic Regression Model </a><a routerlink="/class-model" routerlinkactive="active" class="w-100 nav-item nav-link active" style="flex: 1;" href="/class-model" jsaction="click:;"> Neural Network Model </a><a routerlink="/references" routerlinkactive="active" class="w-100 nav-item nav-link" style="flex: 1;" href="/references" jsaction="click:;"> Additional Information </a></div><router-outlet></router-outlet><app-class-model _nghost-ng-c4256359353 ngh="1"><div _ngcontent-ng-c4256359353 class="page-title"><h1 _ngcontent-ng-c4256359353><!--ngetn--></h1></div><div _ngcontent-ng-c4256359353 class="section"><h2 _ngcontent-ng-c4256359353>Understanding Neural Networks: How They Work and What They Do</h2><div _ngcontent-ng-c4256359353>
    <p> Neural networks are a type of machine learning model inspired by the structure and functionality of the human brain.
    They consist of layers of artificial neurons that process data through a series of transformations to make predictions or classifications. </p>

    <p> Raw data is passed through these layers, where neurons assign importance to different features using weights and biases. 
    These weights and biases help the network transform the data, enabling it to learn complex patterns. 
    The process continues through multiple layers until a final result—often a probability or classification—is produced. </p>
    
    <p>For those interested in learning more about neural networks, here are some resources: </p>
    <ul>
      <li>
        <a href="https://doi.org/10.1016/j.neunet.2014.09.003" target="_blank">
          "Understanding Neural Networks" by Schmidhuber
        </a> 
      </li>
      <li>
        <a href="https://scholar.google.com/scholar?q=Neural+Networks+and+Deep+Learning+Michael+Nielsen" target="_blank">
          "Neural Networks and Deep Learning" by Michael Nielsen
        </a> 
      </li>
      <li>
        <a href="https://scholar.google.com/scholar?q=Neural+Networks+and+Backpropagation+by+Rumelhart+Hinton+Williams" target="_blank">
          "Learning Representations by Back-Propagation Errors" by Rumelhart, Hinton, and Williams
        </a>
      </li>
      <li>
        <a href="https://scholar.google.com/scholar?q=Yoshua+Bengio+Deep+Learning" target="_blank">
          "Deep Learning" by Yoshua Bengio
        </a>
      </li>
    </ul>
  </div></div><div _ngcontent-ng-c4256359353 class="section"><h2 _ngcontent-ng-c4256359353>About Our Model</h2><div _ngcontent-ng-c4256359353>
    <p>In our case, when a user clicks the "Classification" button, the inputs they provide —such as the patient’s age, height, blood pressure,  
    and other medical information— are preprocessed and assigned specific weights. These weights reflect the importance of each input in predicting cardiovascular disease (CVD).
    For example, cholesterol levels likely have a higher weight compared to height, since they're more directly correlated with cardiovascular health. </p>
    
    <p>The network then calculates a weighted sum of all the inputs, applies transformations, and repeats the process across layers until it generates a final probability score. 
    If the score exceeds a certain threshold, our model classifies the patient as “likely at risk for CVD”; otherwise, it classifies them as “not likely at risk.” </p>

    <p>Before a neural network can make predictions on new data, it undergoes a training phase. 
    In our case, we trained our model using a combination of real-world data from Kaggle’s Cardiovascular Disease dataset and Synthea-generated synthetic data generated.</p>
  </div></div><div _ngcontent-ng-c4256359353 class="section"><h2 _ngcontent-ng-c4256359353>Model Performance and Metrics</h2><div _ngcontent-ng-c4256359353>
    <p>To evaluate our model’s performance, we used three key metrics: F1-score, accuracy, and ROC-AUC. Each metric provides unique insights into the model’s ability to predict CVD effectively. </p>

    <ul>
      <li><strong>F1-Score:</strong> F1-score balances precision and recall. Precision ensures that when the model predicts a patient is at risk for CVD, it's correct most of the time; 
      Recall ensures that the model identifies as many at-risk patients as possible. For diseases like CVD, where missing an at-risk patient can have severe consequences, a high F1-score is crucial. 
      Our model’s F1-score of 67% demonstrates moderate success, though there is room for improvement.</li>

      <li><strong>Accuracy:</strong> Accuracy measures the overall proportion of correct predictions. With an accuracy of 73%, the model performs reasonably well in identifying both at-risk and not-at-risk patients. </li>

      <li><strong>ROC-AUC:</strong> This metric evaluates the model’s ability to rank patients by their likelihood of having CVD across various probability thresholds. 
      Our model achieved a ROC-AUC score of 72%, indicating a moderate ability to distinguish between at-risk and not-at-risk patients.</li>
    </ul>
  </div></div></app-class-model><!----></div></div></div></div></section></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-NGHB6PI2.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{"t":{"11":"t0","40":"t1","45":"t2"},"c":{"11":[{"i":"t0","r":1,"x":2}],"40":[{"i":"t1","r":1,"x":3}],"45":[{"i":"t2","r":1,"x":3}]}},{},{"c":{"20":[{"i":"c4256359353","r":1}]}}]}</script></body></html>`;