import "./server";
export async function getVans() {
  const res = await fetch("/api/vans");
  if (!res.ok) {
    throw Object.assign(
      new Error({
        message: "Failed to fetch vans",
        statusText: res.statusText,
        status: res.status,
      })
    );
  }
  const data = await res.json();
  return data.vans;
}

export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
  const res = await fetch(url);
  if (!res.ok) {
    throw Object.assign(
      new Error({
        message: "Failed to fetch vans",
        statusText: res.statusText,
        status: res.status,
      })
    );
  }
  const data = await res.json();
  return data.vans;
}
