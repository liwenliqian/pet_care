export function LocationInfo() {
  return (
    <div className="location-card">
      <div className="map">
        <div className="map-road main" />
        <div className="map-road cross" />
        <div className="map-road side" />
        <div className="map-road short" />
        <div className="map-label road-a">陕西北路</div>
        <div className="map-label road-b">宜昌路</div>
        <div className="map-label road-c">长寿路</div>
        <div className="map-label park">长寿公园</div>
        <div className="map-poi one" aria-hidden="true">
          ☕
        </div>
        <div className="map-poi two" aria-hidden="true">
          🏥
        </div>
        <div className="map-poi three" aria-hidden="true">
          🅿
        </div>
        <div className="store-pin" aria-label="暖爪宠物洗护馆门店位置">
          <span>🐾</span>
        </div>
        <div className="store-card">
          <strong>暖爪宠物洗护馆</strong>
          <span>上海市宜川路街道陕西北路1620号</span>
        </div>
      </div>
      <div className="info-list">
        <div className="info-item">
          <strong>营业时间</strong>
          <span>周一至周日 10:00 - 21:00</span>
        </div>
        <div className="info-item">
          <strong>联系电话</strong>
          <span>188-0000-6688</span>
        </div>
        <div className="info-item">
          <strong>门店地址</strong>
          <span>上海市宜川路街道陕西北路1620号</span>
        </div>
        <div className="info-item">
          <strong>温馨提示</strong>
          <span>首次到店请携带疫苗记录，洗护前 2 小时避免大量进食。</span>
        </div>
      </div>
    </div>
  );
}
