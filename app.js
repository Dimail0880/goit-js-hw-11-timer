class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.delta = targetDate;
    }
    renderMarkup() {
        return `<div class="timer" id="timer-1">
            <div class="field">
              <span class="value" data-value="days"></span>
              <span class="label">Days</span>
            </div>
          
            <div class="field">
              <span class="value" data-value="hours"></span>
              <span class="label">Hours</span>
            </div>
          
            <div class="field">
              <span class="value" data-value="mins"></span>
              <span class="label">Minutes</span>
            </div>
          
            <div class="field">
              <span class="value" data-value="secs"></span>
              <span class="label">Seconds</span>
            </div>
          </div>`
    }
    addToScreen(container, position, element) {
        container.insertAdjacentHTML(position, element)
    }


    action = () => {
        this.secs = document.querySelector('[data-value="secs"]');
        this.mins = document.querySelector('[data-value="mins"]');
        this.hours = document.querySelector('[data-value="hours"]');
        this.days = document.querySelector('[data-value="days"]');

        const time = this.delta - Date.now();

        const secs = Math.floor((time % (1000 * 60)) / 1000);
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const days = Math.floor(time / (1000 * 60 * 60 * 24));

        this.secs.textContent = secs < 10 ? `0${secs}` : secs;
        this.mins.textContent = mins < 10 ? `0${mins}` : mins;
        this.hours.textContent = hours < 10 ? `0${hours}` : hours;
        this.days.textContent = days < 10 ? `0${days}` : days;
    }




    start(container) {
        this.addToScreen(container, 'beforeend', this.renderMarkup());
        this.timerId = setInterval(this.action, 500);
        this.dateStart = Date.now();

    }


}


const timer = new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("Jul 17, 2020")
});
const mainContent = document.querySelector("#root")
timer.start(mainContent);