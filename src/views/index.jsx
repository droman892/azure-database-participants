import './index.css';

const React = require('react');

const DataEntryForm = () => {
    return (
        <div>
            <form action="/" method="post">
                <div>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Contact Name..."
                        className="input-box"
                    />
                </div>
                <div>
                    <input type="text" name="job" id="job" placeholder="Comments..." />
                </div>
                <input type="submit" />
            </form>
        </div>
    );
}

const DataList = ({ dataItems }) => {
    return (
        <table>
            <thead>
                <th>Name</th>
                <th>Job</th>
                <th>
                    Delete{' '}
                    {dataItems.length > 1 && <a href="/delete?all=true">all</a>}
                </th>
            </thead>
            {dataItems.map((item) => {
                const id = item._id.toString();
                return (
                    <tr key={id} id={id}>
                        <td>{item.name}</td>
                        <td>{item.job}</td>
                        <td>
                            <a href={'/delete?id=' + id}>X</a>
                        </td>
                    </tr>
                );
            })}
        </table>
    );
}

const Index = (props) => {
    return (
        <DefaultLayout >
            {props.dbStatus === false && <div>No database found.</div>}

            {props.dbStatus === true && (
                <div>
                    <div>
                        <DataEntryForm></DataEntryForm>
                    </div>
                    {props.data.length > 0 && (
                        <div>
                            <DataList dataItems={props.data}></DataList>
                        </div>
                    )}
                </div>
            )}
        </DefaultLayout>
    );
}

const DefaultLayout = (props) => {
    return (
        <html>
            <body>{props.children}</body>
        </html>
    );
}

module.exports = Index;