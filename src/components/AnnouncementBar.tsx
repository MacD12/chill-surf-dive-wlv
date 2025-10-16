import GuaranteeBadge from "./GuaranteeBadge";

const AnnouncementBar = () => {
  return (
    <div className="bg-muted py-3 border-b">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-3 md:gap-6">
          <GuaranteeBadge type="surf" />
          <GuaranteeBadge type="dive" />
          <GuaranteeBadge type="transport" />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
