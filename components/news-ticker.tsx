import { newsHeadlines } from "@/data/mock-data"

export default function NewsTicker() {
  return (
    <div className="news-ticker">
      <div className="news-ticker__content">
        {newsHeadlines.map((headline, index) => (
          <span key={index} className="news-ticker__item">
            {headline}
          </span>
        ))}
      </div>
    </div>
  )
}
