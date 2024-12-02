import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent {
  pageTitle = '';

  description = `
    Cardiovascular disease (CVD) is one of the most prevalent health concerns globally, making it crucial to be vigilant about potential risks.
    To assist in this effort, we created this web app as a tool for users to assess their potential risk of CVD based on provided medical information.
    By inputting specific health metrics, users can gain insights into whether they may be at risk.
  `;

  howItWorks = `
    <p>On the back end, we utilize two machine learning models:</p>
    <ul>
      <li><strong>Probabilistic logistic regression model:</strong> Calculates the likelihood of having CVD based on weighted inputs.</li>
      <li><strong>Neural network:</strong> Classifies input data as "likely at risk" or "not likely at risk" for CVD.</li>
    </ul>
    <p>Both models are trained to process user-provided data and generate predictions. Users can explore more detailed explanations about how these models work and how they were trained in the respective tabs.</p>
  `;

  disclaimer = `
    <p>Please note that these models are not rigorously validated for clinical use and should not replace medical advice. Machine learning models always have a margin of error and may produce incorrect predictions. 
    Take the results with caution and use them as an educational tool rather than a diagnostic resource.</p>
    <p>If you ever find yourself experiencing symptoms of cardiovascular disease, it’s essential to consult a doctor or seek medical attention from a qualified professional. According to the American Health Association, common symptoms of CVD include:</p>
    <ul>
      <li>Chest pain or discomfort</li>
      <li>Shortness of breath</li>
      <li>Pain or discomfort in the arms, neck, jaw, or back</li>
      <li>Fatigue or weakness</li>
      <li>Dizziness or fainting</li>
      <li>Swelling in the legs, ankles, or feet</li>
      <li>Irregular or rapid heartbeat </li>
    </ul>
  `;

  resources = `
    <p>To learn more about cardiovascular disease and machine learning's role in its diagnosis and prevention, check out these credible resources:</p>
    <ul>
      <li><a href="https://www.heart.org/en/health-topics/consumer-healthcare/what-is-cardiovascular-disease" target="_blank">American Heart Association: What is Cardiovascular Disease?</a></li>
      <li><a href="https://www.cdc.gov/heartdisease/index.htm" target="_blank">CDC: Heart Disease</a></li>
      <li><a href="https://www.nature.com/articles/s41598-020-72685-1" target="_blank">“Machine learning prediction in cardiovascular diseases: a meta-analysis” by Krittanawong et al.</a></li>
      <li><a href="https://academic.oup.com/eurheartj/article-abstract/40/24/1975/5060564" target="_blank">“Clinical applications of machine learning in cardiovascular disease and its relevance to cardiac imaging” by Al'Areh et al.</a></li>
      <li><a href="https://scholar.google.com/scholar?q=machine+learning+cardiovascular+disease" target="_blank">Google Scholar: Machine Learning for Cardiovascular Disease</a></li>
    </ul>
  `;
}
