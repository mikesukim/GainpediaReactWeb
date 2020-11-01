import React, { useEffect } from 'react'

export default function ReadMore(props){
    
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    return (      <div className="container-fluid pt-4" id="article" style={{marginBottom: '100px'}}>
    <div className="mb-4">
      <h2>Soaking In The Colors, and Reboot Builds Upon Normalize, Providing HTML.</h2>
      <h3>Providing many HTML elements with somewhat opinionated styles.</h3>
    </div>  
    <div className="mb-3" style={{border: '1px white solid'}}>
      <img src="images/Jiyun.JPG" alt="Jiyun's profile" width="50px;" style={{float: 'left', marginRight: '10px'}} />
      <img src="images/Michael.JPG" alt="Michael's profile" width="50px;" style={{float: 'left', marginRight: '15px'}} /> 
      <p style={{fontSize: '15px', lineHeight: '12px', marginTop: '10px', marginBottom: '10px'}}>Jiyun, Michael</p>
      <p style={{fontSize: '14px', color: '#777', lineHeight: '12px'}}>Aug. 28. 2019</p>    
    </div>
    <figure>
      <img src="images/typewriter.JPG" className="img-fluid mx-auto d-block articleimg" alt="Beautiful Sky" /> 
      <figcaption>Photo by Jiyun in Vashon, Washington</figcaption>
    </figure>    
    <p className="pKOR" style={{fontFamily: 'KoreanMWL'}}>
      안녕 자기야. 이 글씨체는 어때? 지금 비가 내리는데 지붕위에 떨어지는 소리가 좋다. 자기가 지금 이 소리, 이 분위기를 정말 좋아했을 것 같아. 함께 있으면 좋을텐데. </p>
    <p className="pKOR" style={{fontFamily: 'Godo M'}}>
      안녕 자기야. 이 글씨체는 어때? 지금 비가 내리는데 지붕위에 떨어지는 소리가 좋다. 자기가 지금 이 소리, 이 분위기를 정말 좋아했을 것 같아. 함께 있으면 좋을텐데. </p>
    <p className="pKOR" style={{fontFamily: 'KoreanGD15R'}}>
      안녕 자기야. 이 글씨체는 어때? 지금 비가 내리는데 지붕위에 떨어지는 소리가 좋다. 자기가 지금 이 소리, 이 분위기를 정말 좋아했을 것 같아. 함께 있으면 좋을텐데. </p>
    <p className="pKOR" style={{fontFamily: ''}}>
      안녕 자기야. 이 글씨체는 어때? 지금 비가 내리는데 지붕위에 떨어지는 소리가 좋다. 자기가 지금 이 소리, 이 분위기를 정말 좋아했을 것 같아. 함께 있으면 좋을텐데. </p>
    <p className="pENG">    
      Reboot builds upon Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors. Additional styling is done only with classes. For example, we reboot some table styles for a simpler baseline and later provide .table, .table-bordered, and more. </p> 
    <h4>Soaking In The Colors</h4>
    <p className="pENG">Reboot builds upon Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors. 
      Reboot builds upon Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors. Additional styling is done only with classes. </p>
    <figure>
      <img src="images/booksVashon.JPG" className="img-fluid mx-auto d-block articleimg" alt="Beautiful Sky" /> 
      <figcaption>Photo by Jiyun in Vashon, Washington</figcaption>
    </figure>     
    <p className="pENG">    
      For example, we reboot some table styles for a simpler baseline and later provide .table, .table-bordered, and more. Reboot builds upon Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors.</p> 
    <blockquote>
      "안녕, 난 시네마체라고 해. 오늘은 기분이 우울하니까 하이힐을 신어야겠어. 그리고 성언이한테 사랑한다고 전해줄래? 지금 비가 내리는데, 빗소리 좋다.." 
    </blockquote>        
    <p className="pENG">    
      Additional styling is done only with classes. For example, we reboot some table styles for a simpler baseline and later provide .table, .table-bordered, and more. Reboot builds upon Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors. </p>
    <h4>Soaking In The Colors</h4>  
    <p className="pENG">Additional styling is done only with classes. For example, we reboot some table styles for a simpler baseline and later provide .table, .table-bordered, and more.</p>
    <p className="pENG">Reboot builds upon Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors. Reboot builds upon Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors. </p>
    <p className="pENG">   
      Reboot builds upon Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors. Additional styling is done only with classes. For example, we reboot some table styles for a simpler baseline and later provide .table, .table-bordered, and more. Reboot builds upon Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors. Reboot builds upon Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors. </p>    
  </div>);
}