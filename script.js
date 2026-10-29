 document.querySelectorAll('#Tests.study-btn').foreach(button=>{
    button.addeventlistener('click',
        function(event){
            event.preventDefault();

            const testname=
            this.closest('div').querySelector('h3').textContent;
            alert('Welcome to '+testname+'!');
        });
 });