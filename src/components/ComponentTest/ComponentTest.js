import React, { useState } from 'react';
import "./style.css"
function ComponentTest() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <div className={`expandable-div ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpansion}>
                Click me to expand/collapse
            </div>
            {isExpanded && (
                <div className="expanded-content">
                    This is the expanded content.
                </div>
            )}
        </div>
    );
}



export default ComponentTest;
