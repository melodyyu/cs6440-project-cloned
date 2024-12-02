import { Component } from '@angular/core';

@Component({
  selector: 'app-lr-model',
  imports: [],
  templateUrl: './lr-model.component.html',
  styleUrl: './lr-model.component.css'
})
export class LrModelComponent {
  pageTitle = '';

  lrHeader = 'What is Logistic Regression?';
  lrContent = `
    <p> Logistic regression refers to a model that provides a probability of something occurring based on a set of independent variables </p>

    <p> This method uses historical data to mathematically determine relationships between features. The mathematic formula used when determining probability from logistic regression
    is as follows: </p>

    <div style="text-align: center">
      <img src="/logistic-regression-formula.png" alt="image">
    </div>
    
    <p> where p is probabiliy, each B is a coefficient (determined by training the model), and each X is a feature value. </p>
    Logistic regression is often used in the fields of artificial intelligence (AI) and
    machine learning (ML) for predicitve analysis. This method is used in a variety of fields such as manufacturing, healthcare, finance, and marketing because of its simplicity, 
    speed, flexibility, and its visibility. </p>
    
    <p> In our case, it we have trained our model on various independent variables (i.e. age, gender, height, weight, etc.) to determine the probability that a patient 
    or user might have a CVD. </p>
  `;


  modelHeader = 'About Our Model';
  modelContent = `
    <p>With our logistic regression model, we used the Python sklearn package to split our dataset into a training and test set. Then we used the built in logistic regression
    function to train a model. We used a dataset that is a combination of Kaggle data and randomly generated patient data form Synthea to train. </p>
    
    <p>From there, we took the coeffiencts that were calculated, and used them in our Flask API call to calculate the probability of a user having a CVD based on the formula from above.
    In this case, the form inputs would be the user input from the form, and the coefficients would be those we had calculated from the model. </p>

  `;

  metricsHeader = 'Model Performance and Metrics';
  metricsContent = `
    <p>To evaluate our model’s performance, we used three key metrics: F1-score, accuracy, and ROC-AUC. Each metric provides unique insights into the model’s ability to predict CVD effectively.
    In the case for a logistic regression model, the these scores can still be used to determine the quality of the model, even if we are not using it for classification, 
    as the model itself can be used for both classification and probability, depending on if you decide to transform the coefficients or not. </p>

    <ul>
      <li><strong>F1-Score:</strong> F1-score balances precision and recall. Precision ensures that when the model provides a probability of risk for CVD, it's correct most of the time.
      Recall ensures that the model identifies as many at-risk patients as possible. 
      Our model’s F1-score of 64% demonstrates moderate success, though there is room for improvement.</li>

      <li><strong>Accuracy:</strong> Accuracy measures the overall proportion of correct predictions. With an accuracy of 71%, the model performs reasonably well in predicting patient likelihood of having a CVD. </li>

      <li><strong>ROC-AUC:</strong> This metric evaluates the model’s ability to rank patients by their likelihood of having CVD across various probability thresholds. 
      Our model achieved a ROC-AUC score of 70%, indicating a moderate ability to distinguish between at-risk and not-at-risk patients.</li>
    </ul>
  `;
  constructor(){}
}
