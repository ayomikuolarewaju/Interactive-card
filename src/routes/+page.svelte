<script> 
import img1 from '../img/bg-card-back.png';
import img2 from '../img/bg-card-front.png';
import img3 from '../img/bg-main-desktop.png';
import img4 from '../img/bg-main-mobile.png';
import img5 from '../img/card-logo.svg';
import img6 from '../img/icon-complete.svg';
let name = ''
let number = ''
let month  = ''
let yrs = ''
let cvc = ''
let wrong = 'The fields are required'
let submitter = false
const confirm =()=>{
    if(name == '' && number == '' && month == '' && yrs == '' && cvc == ''){
        wrong
       return 
    }else{
        submitter = true;
    }
}
</script>


<div class="flex flex-col">
    <div class="container flex flex-row overflow-hidden absolute">
        <div class="flex flex-col mx-auto my-auto w-2/3 h-screen bg-no-repeat z-10"
        style="background-image: url('{img3}');">
        <div class="flex flex-col w-3/3 h-2/3 bg-no-repeat md:z-50 p-10 relative md:top-20 md:left-36 space-y-5 top-28 left-5 z-50" style="background-image: url('{img2}');">
              <img src="{img5}" alt="" srcset="" width="70" height="70">
              <p class="pt-10 text-white font-bold text-2xl">{number}</p>
              <div class=" flex flex-row space-x-32">
                <p class="text-white font-bold text-xl">{name}</p>
                <p class="text-white font-bold text-xl">{month}/{yrs}</p>
              </div>
        </div>
        <div class="flex flex-col w-3/3 h-2/3 bg-no-repeat md:z-50 p-10 relative md:top-10 md:left-52 -top-96 left-3 z-30" style="background-image: url('{img1}');">
    
           <p class="text-white font-bold text-xl pt-16 pl-80">{cvc}</p>
        </div>
        </div>
        <div class="flex flex-col mx-auto my-auto bg-white w-3/3 h-screen items-center p-20 z-20">
            {#if submitter == false}
            <form  class ="flex flex-col md:mx-auto md:my-auto md:p-20 my-40 -mx-96 items-start p-44 absolute right-10 md:-right-60" on:click|preventDefault on:keydown>
                <div> 
                    <div class="flex flex-col items-start pl-10">
                        <label for="name" class="text-black text-xs text-left font-bold">CARDHOLDER NAME</label>
                        <input type="text" placeholder="e.g John Doe" required bind:value={name} class="text-black p-2 w-3/3 rounded-md border border-black mb-5 font-bold">
                    </div>
                    <div class="flex flex-col items-start pl-10">
                        <label for="name" class="text-black text-xs text-left font-bold">CARD NUMBER</label>
                        <input type="number" placeholder="e.g 4444 0000 5555 7777" required bind:value={number} class="text-black p-2 w-3/3 rounded-md border border-black mb-5 font-bold">
                    </div>
                </div>
                <div class="flex flex-row md:w-3/3 items-start w-2/3">
                    <div class="flex flex-col items-start pl-10">
                        <label for="name" class="text-black text-xs items-start font-bold">DATE</label>
                        <input type="number" placeholder="e.g 02" required bind:value={month} class="text-black p-2 w-2/3 rounded-md border border-black font-bold">
                    </div>
                    <div class="flex flex-col items-start">
                        <label for="name" class="text-black text-xs items-start font-bold">(MM/YY)</label>
                        <input type="number" placeholder="e.g 2023" required bind:value={yrs} class="text-black p-2 w-2/3 rounded-md border border-black font-bold">
                    </div>
                    <div class="flex flex-col items-start">
                        <label for="name" class="text-black text-xs items-start font-bold">CVC</label>
                        <input type="number" placeholder="e.g 202" required bind:value={cvc} class="text-black p-2 w-2/3 rounded-md border border-black font-bold">
                    </div>
                </div>
                <button class="bg-black rounded-md text-white font-bold p-2 w-2/3 mt-5 ml-10" on:click={confirm} on:keydown>
                    Confirm
                </button>

            </form>
                
            {/if}
        
            {#if submitter == true}
               <div class="flex flex-col w-full md:w-full md:p-10 bottom-5
               relative md:-right-10 md:items-right md:bottom-60 my-80 right-80 p-15  items-center text-center">
                <img src="{img6}" alt="" width="100" height="100" >
               <h5 class="text-2xl md:text-6xl font-bold pb-2">THANK YOU!</h5>
               <p class="text-xl md:text-3xl pb-2 w-full">We've add your details</p>
               <button class="bg-black rounded-md text-white font-bold p-3 w-full">Continue</button>
                </div>
        
            {/if}

        </div>
    
    </div>
    

</div>
