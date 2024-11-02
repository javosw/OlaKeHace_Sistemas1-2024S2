import { Component, Input } from '@angular/core';
import { GetEvent } from '../../../okh-data/user.data';
import { EventComponent } from "../../multi/event/event.component";

@Component({
  selector: 'okh-get-attendance',
  standalone: true,
  imports: [EventComponent],
  templateUrl: './get-attendance.component.html',
})
export class GetAttendanceComponent {
  @Input() event: GetEvent | null = null;
  ngOnInit() {
    this.startCountdown();
  }
  constructor() { }

  remainingTime: string = '';

  private combineDateAndTime(dateStr: string, timeStr: string): Date {
    const dateTimeStr = `${dateStr}T${timeStr}`; // "2025-08-08T05:00:00"
    return new Date(dateTimeStr);
  }

  private getTimeDifference(targetDate: Date): string {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return 'EVENTO COMPLETADO';
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return `${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
  }

  private countdownInterval: any;

  private startCountdown(): void {
    if (!this.event?.fecha || !this.event?.hora) { return; }
    const targetDate: Date = this.combineDateAndTime(this.event.fecha, this.event.hora);

    if (this.countdownInterval) { clearInterval(this.countdownInterval); }
    this.countdownInterval = setInterval(() => { this.remainingTime = this.getTimeDifference(targetDate); }, 1000);
  }

}
