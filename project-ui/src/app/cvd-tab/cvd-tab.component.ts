import { Component } from '@angular/core';

@Component({
  selector: 'app-cvd-tab',
  templateUrl: './cvd-tab.component.html',
  styleUrls: ['./cvd-tab.component.css']
})
export class CvdTabComponent {
  pageTitle = '';
  
  causesHeader = 'What Causes CVD?';
  causesContent = `
    <p>Cardiovascular disease (CVD) refers to a group of disorders that affect the heart and blood vessels, including coronary artery disease, heart attacks, 
    strokes, heart failure, and arrhythmias (irregular beating of the heart). These conditions are caused by the narrowing or blockage of blood vessels, leading to restricted blood flow to vital organs.</p>

    <p>According to the CDC, CVD is a major public health concern in the United States. While more prevalent in older demographics, heart disease was the cause of one in every five deaths in 2020. 
    Strokes, a common outcome of CVD, occur every 40 seconds in the U.S., with someone dying from it every 3.5 minutes. Below is a infographic from the American Heart Association. </p>

    <div style="text-align: center">
      <img src="/ama_demographic.jpg" alt="image">
    </div>

    <p>CVD is primarily caused by a condition called atherosclerosis, in which plaque builds up in the arteries and restricts blood flow to the heart and brain. 
    Contributing factors to these buildups are numerous but include some listed in our form, namely: blood pressure, smoking, and cholesterol and glucose levels. Together these risk factors damage blood vessels and make them more prone to blockages and reduced blood flow.</p>
  `;

  riskFactorsHeader = 'Risk Factors for CVD';
  riskFactorsContent = `
    <p>CVD risk factors fall into two categories: modifiable and non-modifiable.</p>
    <ul>
      <li><strong>Modifiable Risk Factors:</strong> These are factors individuals can control through lifestyle changes and medical treatment, including diet, smoking, physical inactivity, high blood pressure, and high cholesterol.</li>
      <li><strong>Non-Modifiable Risk Factors:</strong> These include age, genetics, and gender. While these cannot be changed, they help identify individuals who may need more proactive prevention strategies.</li>
    </ul>
  `;

  mitigationHeader = 'How to Mitigate Risks';
  mitigationContent = `
    <p>Like many illnesses and diseases, the risk of having a CVD can be mitigated by living a healthier lifestyle. Trusted organizations like the American Heart Association recommend several strategies to reduce risk:</p>
    <ul>
      <li>Stop smoking</li>
      <li>Have a balanced diet</li>
      <li>Exercise regularly</li>
      <li>Cut down on alcohol</li>
      <li>Take medicine as prescribed for managing chronic conditions like high blood pressure and cholesterol</li>
    </ul>
  `;

  constructor() {}
}
