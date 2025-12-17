import WorkHeader from './WorkHeader';
import WorkGrid from './WorkGrid';
import ShowMoreLink from './ShowMoreLink';

export default function Work() {
  return (
    <section id="work" className="w-full scroll-mt-20 px-[12%] py-10">
      <WorkHeader />
      <WorkGrid />
      <ShowMoreLink />
    </section>
  );
}
