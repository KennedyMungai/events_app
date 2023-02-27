import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Events = () =>
{
    return (
        <div>
            <h1>Events Page</h1>
            <Link href="/">
                <Image src="" alt="" />
                <h2>Events In London</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure
                    officiis labore tenetur rem magni eveniet velit dicta minus, ut,
                    assumenda quae praesentium vel, nemo vero alias saepe unde. Quod sed
                    quos eum reprehenderit error voluptatum tempora odio suscipit
                    officia facilis numquam repellat, libero, velit ratione eligendi
                    nisi magni esse?
                </p>
            </Link>
            <Link href="/">
                <Image src="" alt="" />
                <h2>Events In LA</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure
                    officiis labore tenetur rem magni eveniet velit dicta minus, ut,
                    assumenda quae praesentium vel, nemo vero alias saepe unde. Quod sed
                    quos eum reprehenderit error voluptatum tempora odio suscipit
                    officia facilis numquam repellat, libero, velit ratione eligendi
                    nisi magni esse?
                </p>
            </Link>
            <Link href="/">
                <Image src="" alt="" />
                <h2>Events In Lima</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure
                    officiis labore tenetur rem magni eveniet velit dicta minus, ut,
                    assumenda quae praesentium vel, nemo vero alias saepe unde. Quod sed
                    quos eum reprehenderit error voluptatum tempora odio suscipit
                    officia facilis numquam repellat, libero, velit ratione eligendi
                    nisi magni esse?
                </p>
            </Link>
        </div>
    )
}

export default Events