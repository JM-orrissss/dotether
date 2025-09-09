"use client";

import { componentMapper, contentfulQuery } from "@/lib/contentfulClient";
import { useEffect, useState } from "react";

export default function ContentfulRenderer() {
    const [items, setItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContent = async () => {
            const query = `
                blogPostCollection(limit: 5) {
                    items {
                        sys {
                            id
                            contentType {
                                sys {
                                    id
                                }
                            }
                        }
                        title
                        slug
                        content
                    }
                }
            `;

            try {
                const { data } = await contentfulQuery(query);
                setItems(data.blogPostCollection.items);
            } catch (error) {
                console.error("Error fetching content:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {items.map((item) => {
                const Component = componentMapper[item.sys.contentType.sys.id];
                if (!Component) {
                    console.warn(`No component registered for content type: ${item.sys.contentType.sys.id}`);
                    return null;
                }
                return <Component key={item.sys.id} {...item} />;
            })}
        </div>
    );
}
