import { Component } from '@angular/core';

@Component({
  selector: 'app-class-model',
  templateUrl: './class-model.component.html',
  styleUrls: ['./class-model.component.css']
})
export class ClassModelComponent {
  pageTitle = '';

  neuralNetworkHeader = 'Understanding Neural Networks: How They Work and What They Do';
  neuralNetworkContent = `
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
  `;


  modelHeader = 'About Our Model';
  modelContent = `
    <p>In our case, when a user clicks the "Classification" button, the inputs they provide —such as the patient’s age, height, blood pressure,  
    and other medical information— are preprocessed and assigned specific weights. These weights reflect the importance of each input in predicting cardiovascular disease (CVD).
    For example, cholesterol levels likely have a higher weight compared to height, since they're more directly correlated with cardiovascular health. </p>
    
    <p>The network then calculates a weighted sum of all the inputs, applies transformations, and repeats the process across layers until it generates a final probability score. 
    If the score exceeds a certain threshold, our model classifies the patient as “likely at risk for CVD”; otherwise, it classifies them as “not likely at risk.” </p>

    <p>Before a neural network can make predictions on new data, it undergoes a training phase. 
    In our case, we trained our model using a combination of real-world data from Kaggle’s Cardiovascular Disease dataset and Synthea-generated synthetic data generated.</p>
  `;

  metricsHeader = 'Model Performance and Metrics';
  metricsContent = `
    <p>To evaluate our model’s performance, we used three key metrics: F1-score, accuracy, and ROC-AUC. Each metric provides unique insights into the model’s ability to predict CVD effectively. </p>

    <ul>
      <li><strong>F1-Score:</strong> F1-score balances precision and recall. Precision ensures that when the model predicts a patient is at risk for CVD, it's correct most of the time; 
      Recall ensures that the model identifies as many at-risk patients as possible. For diseases like CVD, where missing an at-risk patient can have severe consequences, a high F1-score is crucial. 
      Our model’s F1-score of 67% demonstrates moderate success, though there is room for improvement.</li>

      <li><strong>Accuracy:</strong> Accuracy measures the overall proportion of correct predictions. With an accuracy of 73%, the model performs reasonably well in identifying both at-risk and not-at-risk patients. </li>

      <li><strong>ROC-AUC:</strong> This metric evaluates the model’s ability to rank patients by their likelihood of having CVD across various probability thresholds. 
      Our model achieved a ROC-AUC score of 72%, indicating a moderate ability to distinguish between at-risk and not-at-risk patients.</li>
    </ul>
  `;

  constructor() {}
}
