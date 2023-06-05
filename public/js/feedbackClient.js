let form = document.querySelector('form')


form.addEventListener('submit', async (e) => {
    //stop the default
    e.preventDefault()
    //need to make an obj to hold the data to dsiplay and be referred to
    let newFeedback = {
        name: document.querySelector('#form-control-name').value,
        message:document.querySelector('#form-control-message').value

    }

    //reconfig the fetch call to post instead of get
    let result = await fetch('/api', {
        method: 'POST',
        headers:{'Content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify(newFeedback)
    })
    let messages = await result.json()
    // console.log(messages);
    updateFeedback(messages)
    
})

const updateFeedback = (messagesArr) => {
    let htmlBlock = ""
    messagesArr.forEach((item, index) => {
        htmlBlock += '     <div class="feedback-item item-list media-list">';
        htmlBlock += '       <div  id="feedback" class="feedback-item media">';
        htmlBlock += '         <div class="feedback-info media-body">';
        htmlBlock += '           <div class="feedback-head">';
        htmlBlock += '             <div class="feedback-title"><small class="feedback-name label label-info">' + item.name + '</small></div>';
        htmlBlock += '           </div>';
        htmlBlock += '           <div class="feedback-message">' + item.message + '</div>';
        htmlBlock += '       <div class="media-left"><button id="delete" class="feedback-delete btn btn-xs "></i><i class="fa-solid fa-trash fa-sm"></i><span id="' + index + '" "></span></button></div>';
        htmlBlock += '         </div>'; 
        htmlBlock += '       </div>';
        htmlBlock += '     </div>';
        
       
        
       })
        
   
    
    
    //attach to the DOM
    
    let feedbackMessages = document.querySelector('#feedbackDisplay')
    
    feedbackMessages.innerHTML = htmlBlock
    
   
    
  
  
    
        
  
    
}

const displaymessages = async() => {
    let result = await fetch('/api')

    let messages = await result.json()
    updateFeedback(messages)
}
displaymessages()

let remove = document.querySelector('#feedbackDisplay')
remove.addEventListener('click', (e) => {
    const target = e.target.closest("#delete")
    if(target){

    let id = e.target.querySelector('span').getAttribute('id')
    console.log(id);
    deleteMessages(id)
      
    }
    

    })
  
const deleteMessages = async (id) => {
    let idObj={
        index:id
    }
    let result = await fetch(`api/${id}`, {
        method: 'DELETE',
        headers:{'Content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify(idObj)
        
    })
    displaymessages()
    
}


