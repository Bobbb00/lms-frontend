type HeaderSectionProps = {
  titleHeader: string;
  description?: string;
};

export default function HeaderSection(props: HeaderSectionProps) {
  return (
    <header className="text-center w-full space-y-3 mb-10">

      <h1 className="font-bold text-xl md:text-3xl lg:text-4xl">
        {props.titleHeader}
      </h1>

      <p className="lg:w-1/2 text-center mx-auto text-gray-500 text-sm lg:text-base">
        {props.description || ''}
      </p>
    </header>
  );
}