import LetsTalkHero from '@/app/[locale]/lets-talk/components/LetsTalkHero';
import LetsTalkSendUs from '@/app/[locale]/lets-talk/components/LetsTalkSendUs';
import LetsTalkWhatHappens from '@/app/[locale]/lets-talk/components/LetsTalkWhatHappens';
import LetsTalkStillDeciding from '@/app/[locale]/lets-talk/components/LetsTalkStillDeciding';

export default function LetsTalkPage() {
  return (
    <>
      <LetsTalkHero />
      <LetsTalkSendUs />
      <LetsTalkWhatHappens />
      <LetsTalkStillDeciding />
    </>
  );
}
