type Props = {
  subtitle: string;
  title: string;
};

const PageHeader = ({ subtitle, title }: Props) => {
  return (
    <header className="w-full my-8">
      <div className="w-[90%] md:w-4/5 mx-auto ">
        <h2 className="text-white">
          <span className="text-primary">/</span>
          {title}
        </h2>
        <small>{subtitle}</small>
      </div>
    </header>
  );
};

export default PageHeader;
